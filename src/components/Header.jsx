import { Box, Flex, Heading, Image, Link } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import SearchOrder from "../pages/SearchOrder";

const Home = () => {
  const name = useSelector((state) => state.customer.name);

  return (
    <Box>
      <Box bg="#8B4513" px={6} py={4} color="#FFF8DC">
        <Flex align="center" justify="space-between" wrap="wrap">
          <Flex align="center" gap={8} flex="1">
            <Image
              src="https://img.freepik.com/premium-vector/pizza-logo-design_9845-319.jpg"
              alt="Pizza Logo"
              boxSize="60px"
              border="3px solid #000"
              borderRadius="full"
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
          <SearchOrder />

          <Flex align="center" gap={6} flex="1" justify="center" wrap="wrap">
            <Link
              as={NavLink}
              to="/home"
              color="#FFF8DC"
              px={2}
              py={1}
              fontSize="lg"
              fontWeight="bold"
              borderRadius="md"
              _hover={{
                textDecoration: "none",
                color: "#8B4513",
                bg: "#FFD700",
                transform: "scale(1.05)",
              }}
              _activeLink={{
                color: "#8B4513",
                bg: "#FFD700",
              }}
              transition="all 0.3s ease"
            >
              Home
            </Link>

            <Link
              as={NavLink}
              to="/cart"
              color="#FFF8DC"
              px={2}
              py={1}
              fontSize="lg"
              fontWeight="bold"
              borderRadius="md"
              _hover={{
                textDecoration: "none",
                color: "#8B4513",
                bg: "#FFD700",
                transform: "scale(1.05)",
              }}
              _activeLink={{
                color: "#8B4513",
                bg: "#FFD700",
              }}
              transition="all 0.3s ease"
            >
              Cart
            </Link>

            <Link
              as={NavLink}
              to="/neworder"
              color="#FFF8DC"
              px={2}
              py={1}
              fontSize="lg"
              fontWeight="bold"
              borderRadius="md"
              _hover={{
                color: "#8B4513",
                bg: "#FFD700",
                textDecoration: "none",
                transform: "scale(1.05)",
              }}
              _activeLink={{
                color: "#8B4513",
                bg: "#FFD700",
              }}
              transition="all 0.3s ease"
            >
              Order
            </Link>
          </Flex>

          <Box>
            <strong
              style={{
                fontSize: "1.5em",
                color: "#FFD700",
                backgroundColor: "#8B4513",
                padding: "8px 16px",
                borderRadius: "12px",
                fontFamily: "serif",
                marginLeft: "auto",
                textAlign: "center",
                display: "inline-block",
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
