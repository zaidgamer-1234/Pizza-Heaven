import {
  Box,
  Text,
  VStack,
  Heading,
  Divider,
  Tag,
  TagLabel,
  TagLeftIcon,
  HStack,
} from "@chakra-ui/react";
import { FaClock } from "react-icons/fa";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { formatCurrency, calcMinutesLeft } from "../Helper/helpers";

function OrderDetails() {
  const { id } = useParams();
  const location = useLocation();
  const data = location.state?.data;

  if (!data) {
    return (
      <Box mt={20} textAlign="center">
        <Text fontSize="2xl" color="red.600" fontWeight="bold">
          Order not found. Please check the order ID.
        </Text>
        <Box
          as={NavLink}
          to="/home"
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          color="white"
          bg="red.500"
          fontWeight="bold"
          fontSize="lg"
          textDecoration="none"
          _hover={{
            bg: "red.700",
            textDecoration: "underline",
          }}
          _activeLink={{
            bg: "red.900",
            textDecoration: "underline",
          }}
          px={4}
          py={3}
          borderRadius="full"
          _focus={{
            boxShadow: "outline",
          }}
          mt={8}
        >
          &larr; Go to Home
        </Box>
      </Box>
    );
  }

  const {
    estimatedDelivery,
    customer,
    orderPrice,
    status,
    priority,
    priorityPrice,
  } = data;

  const estimatedDeliveryForOrder = calcMinutesLeft(estimatedDelivery);

  return (
    <Box
      bgGradient="linear(to-br, #ffe6d6, #ffb870)"
      p={10}
      borderRadius="lg"
      maxW="800px"
      mx="auto"
      mt={20}
      mb={3}
      boxShadow="xl"
      transition="box-shadow 0.2s"
      _hover={{ boxShadow: "2xl" }}
    >
      <VStack spacing={6} align="start">
        <Heading as="h2" size="2xl" color="#a04c3d" mb={4}>
          Order Details
        </Heading>
        <Divider borderColor="#a04c3d" />
        <HStack spacing={4}>
          <Text fontSize="xl" fontWeight="bold" color="#8a3d2f">
            Order ID:
          </Text>
          <Tag size="lg" variant="solid" bg="#8a3d2f" color="white">
            {id}
          </Tag>
        </HStack>
        <HStack spacing={4}>
          <Text fontSize="xl" fontWeight="bold" color="#8a3d2f">
            Customer:
          </Text>
          <Text fontSize="xl" color="#a04c3d">
            {customer}
          </Text>
        </HStack>

        <HStack spacing={4}>
          <Text fontSize="xl" fontWeight="bold" color="#8a3d2f">
            Total Price:
          </Text>
          <Text fontSize="xl" color="#a04c3d">
            {formatCurrency(orderPrice)}
          </Text>
        </HStack>
        <HStack spacing={4}>
          <Text fontSize="xl" fontWeight="bold" color="#8a3d2f">
            Estimated Delivery:
          </Text>
          <Text fontSize="xl" color="#a04c3d">
            {estimatedDeliveryForOrder > 0
              ? `${estimatedDeliveryForOrder} minutes left`
              : "Delivered"}
          </Text>
        </HStack>
        {estimatedDeliveryForOrder > 0 ? (
          <Tag
            size="lg"
            colorScheme="green"
            borderRadius="full"
            boxShadow="md"
            px={4}
            py={2}
          >
            <TagLeftIcon as={FaClock} />
            <TagLabel>On the way!</TagLabel>
          </Tag>
        ) : (
          <Tag
            size="lg"
            colorScheme="red"
            borderRadius="full"
            boxShadow="md"
            px={4}
            py={2}
          >
            <TagLabel>Delivered</TagLabel>
          </Tag>
        )}
        <HStack spacing={4}>
          <Text fontSize="xl" fontWeight="bold" color="#8a3d2f">
            Status:
          </Text>
          <Text
            fontSize="xl"
            fontWeight="bold"
            color={status === "preparing" ? "orange.500" : "green.500"}
          >
            {status}
          </Text>
        </HStack>
        <HStack spacing={4}>
          <Text fontSize="xl" fontWeight="bold" color="#8a3d2f">
            Priority:
          </Text>
          <Text
            fontSize="xl"
            fontWeight="bold"
            color={priority ? "green.500" : "gray.600"}
          >
            {priority ? `Yes (+${formatCurrency(priorityPrice)})` : "No"}
          </Text>
        </HStack>
      </VStack>

      <Box
        as={NavLink}
        to="/home"
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        bg="#8a3d2f"
        fontWeight="bold"
        fontSize="lg"
        textDecoration="none"
        _hover={{
          bg: "#a04c3d",
        }}
        _activeLink={{
          bg: "#a64d3e",
        }}
        px={4}
        py={3}
        borderRadius="full"
        _focus={{
          boxShadow: "outline",
        }}
        mt={8}
      >
        &larr; Home
      </Box>
    </Box>
  );
}

export default OrderDetails;
