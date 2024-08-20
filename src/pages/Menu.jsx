import { useLoaderData } from "react-router-dom";
import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  VStack,
  Badge,
  Button,
} from "@chakra-ui/react";
import { getMenu } from "../Helper/apiRestaurant";

function Menu() {
  const data = useLoaderData();

  return (
    <Box p={6}>
      <Heading mb={6} textAlign="center" color="#8B4513">
        Our Menu
      </Heading>
      <Flex direction="row" wrap="wrap" gap={7} justify="center">
        {data.map((item) => (
          <Box
            key={item.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={4}
            bg={item.soldOut ? "#D3D3D3" : "#fff2be"}
            boxShadow="md"
            position="relative"
            _hover={{
              transform: "scale(1.04)",
              boxShadow: "xl",
              transition: "transform 0.2s ease-in",
            }}
            maxW="300px"
          >
            {item.soldOut && (
              <Badge
                position="absolute"
                top={2}
                right={2}
                colorScheme="red"
                variant="subtle"
              >
                Sold Out
              </Badge>
            )}
            <Image
              src={item.imageUrl || "default-image-url"}
              alt={item.name || "Default name"}
              borderRadius="md"
              mb={4}
              boxSize="200px"
              objectFit="cover"
            />
            <VStack spacing={2} align="start">
              <Heading size="md" color="#8B4513">
                {item.name || "Default name"}
              </Heading>
              <Text color="#D2691E">Unit Price: ${item.unitPrice}</Text>

              <Button
                mt={4}
                colorScheme="teal"
                size="sm"
                isDisabled={item.soldOut}
              >
                Add to Cart
              </Button>
            </VStack>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

async function loader() {
  try {
    const menu = await getMenu();
    return menu;
  } catch (error) {
    throw new Error(`Failed to load menu: ${error.message}`);
  }
}

export default Menu;
export { loader };
