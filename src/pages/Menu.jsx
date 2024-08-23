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
import { useDispatch } from "react-redux";
import { addItem } from "../Slice/cartListSlice";
import { formatCurrency } from "../Helper/helpers";

function Menu() {
  const data = useLoaderData();
  const dispatch = useDispatch();

  const handleAddtoCart = (item) => {
    const newItem = {
      pizzaId: item.id,
      name: item.name,
      quantity: 1,
      unitPrice: item.unitPrice,
      totalPrice: item.unitPrice * 1,
    };
    dispatch(addItem(newItem));
  };

  return (
    <Box p={4}>
      <Heading mb={6} textAlign="center" color="#8B4513">
        Our Menu
      </Heading>
      <Flex direction="column" align="center">
        {data.map((item) => (
          <Box
            key={item.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={4}
            bg={item.soldOut ? "#D3D3D3" : "#f8db65"}
            boxShadow="md"
            mb={14}
            _hover={{
              transform: "scale(1.02)",
              boxShadow: "lg",
              transition: "transform 0.2s ease-in",
            }}
            maxW="900px"
            width="100%"
            position="relative"
          >
            {item.soldOut && (
              <Badge
                position="absolute"
                top={2}
                right={2}
                colorScheme="red"
                variant="subtle"
                zIndex={1}
              >
                Sold Out
              </Badge>
            )}
            <Flex align="center" gap={4} direction="row">
              <Image
                src={item.imageUrl || "default-image-url"}
                alt={item.name || "Default name"}
                borderRadius="md"
                boxSize="120px"
                objectFit="cover"
              />
              <VStack spacing={2} align="start" flex="1">
                <Heading size="md" color="#8B4513">
                  {item.name || "Default name"}
                </Heading>
                <Text color="#D2691E">
                  Unit Price: <strong>{formatCurrency(item.unitPrice)}</strong>
                </Text>
                <Text color="#8B4513">
                  Ingredients: {item.ingredients.join(", ")}
                </Text>
              </VStack>
            </Flex>
            <Flex justify="flex-end" mt={4}>
              {!item.soldOut && (
                <Button
                  onClick={() => handleAddtoCart(item)}
                  colorScheme="teal"
                  size="sm"
                  isDisabled={item.soldOut}
                >
                  Add to Cart
                </Button>
              )}
            </Flex>
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

export const calculateTotalQuantity = (state) => {
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
};

export const calculateTotalUnitPrice = (state) => {
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
};

export default Menu;
export { loader };
