import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Image,
  Link,
} from "@chakra-ui/react";
import { FaPizzaSlice } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Home = () => {
  const name = useSelector((state) => state.customer.name);
  return (
    <Box>
      <Box bg="#8B4513" px={6} py={4} color="#FFF8DC">
        <Flex align="center" justify="space-between">
          <Flex align="center" gap={8}>
            <Image
              src="https://img.freepik.com/premium-vector/pizza-logo-design_9845-319.jpg"
              alt="Pizza Logo"
              boxSize="50px"
            />
            <Heading
              as="h1"
              size="lg"
              fontFamily="serif"
              color="#FFF8DC"
              letterSpacing="wider"
            >
              Pizza Heaven
            </Heading>
          </Flex>

          <InputGroup maxW="500px">
            <InputLeftElement pointerEvents="none">
              <FaPizzaSlice color="#22211f" size="1.5em" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search order #"
              bg="#FFF8DC"
              color="#8B4513"
              _placeholder={{ color: "#8B4513" }}
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

          <Flex align="center" gap={6}>
            <Link
              as={NavLink}
              to="/home"
              color="#FFF8DC"
              px={4}
              py={2}
              fontSize="lg"
              borderRadius="md"
              _hover={{
                textDecoration: "none",
                color: "#FFD700",
                bg: "#c2a28c",
              }}
              _activeLink={{
                color: "#FFD700",
                fontWeight: "bold",
                bg: "#8B4513",
              }}
            >
              Home
            </Link>

            <Link
              as={NavLink}
              to="/cart"
              color="#FFF8DC"
              px={4}
              py={2}
              fontSize="lg"
              borderRadius="md"
              _hover={{
                textDecoration: "none",
                color: "#FFD700",
                bg: "#c2a28c",
              }}
              _activeLink={{
                color: "#FFD700",
                fontWeight: "bold",
                bg: "#8B4513",
              }}
            >
              Cart
            </Link>

            <Link
              as={NavLink}
              to="/neworder"
              fontSize="lg"
              color="#FFF8DC"
              px={4}
              py={2}
              borderRadius="md"
              _hover={{
                color: "#FFD700",
                bg: "#c2a28c",
                textDecoration: "none",
              }}
              _activeLink={{
                color: "#FFD700",
                fontWeight: "bold",
                bg: "#8B4513",
              }}
            >
              Order
            </Link>
          </Flex>

          {/* Customer Name */}
          <Box>
            <strong
              style={{
                fontSize: "1.5em",
                color: "#FFD700",
                backgroundColor: "#8B4513",
                padding: "8px 16px",
                borderRadius: "12px",
                fontFamily: "serif",
              }}
            >
              {name}
            </strong>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
