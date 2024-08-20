import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaPizzaSlice } from "react-icons/fa";
import { useNavigate, useNavigation } from "react-router-dom";

function Home() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const navigate = useNavigate();
  const handleStartOrdering = () => {
    navigate("/menu");
  };
  return (
    <>
      <Box
        bg="#FFF8DC"
        px={6}
        py={20}
        textAlign="center"
        color="#8B4513"
        borderBottom="2px solid #D2691E"
      >
        <VStack spacing={6} maxW="800px" mx="auto">
          <Heading as="h2" size="xl" fontFamily="serif" color="#8B4513">
            Welcome to Pizza Heaven!
          </Heading>
          <Text fontSize="lg" color="#8B4513" maxW="600px" mx="auto">
            At Pizza Heaven, we believe that every pizza is a slice of
            happiness.
          </Text>
          <InputGroup maxW="500px" mx="auto">
            <InputLeftElement pointerEvents="none">
              <FaPizzaSlice color="#8B4513" size="1.2em" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Start by your name.."
              bg="#8B4513"
              color="#FFF8DC"
              _placeholder={{ color: "#FFF8DC" }}
              borderRadius="full"
              border="2px solid #D2691E"
              _focus={{
                borderColor: "#FFD700",
                boxShadow: "0 0 0 1px #FFD700",
              }}
              px={6}
              py={4}
              fontSize="lg"
            />
          </InputGroup>
          <Button
            onClick={handleStartOrdering}
            mt={4}
            colorScheme="yellow"
            variant="solid"
            borderRadius="full"
            size="lg"
          >
            {isLoading ? "Loading..." : "Start Ordering"}
          </Button>
        </VStack>
      </Box>
    </>
  );
}

export default Home;
