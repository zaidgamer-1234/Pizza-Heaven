import {
  Box,
  Text,
  VStack,
  Heading,
  Divider,
  Badge,
  Icon,
  Tag,
  TagLabel,
  TagLeftIcon,
  HStack,
} from "@chakra-ui/react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import { useLocation, useParams } from "react-router-dom";
import { formatCurrency, formatDate, calcMinutesLeft } from "../Helper/helpers";

function OrderDetails() {
  const { id } = useParams();
  const location = useLocation();
  const order = location.state.order;
  console.log(order);

  if (!order) {
    return <Text>Order not found.</Text>;
  }

  const { estimatedDelivery, customer, phone, address, createdAt, orderPrice } =
    order;

  const estimatedDeliveryforOrder = calcMinutesLeft(estimatedDelivery);

  return (
    <Box
      bgGradient="linear(to-br, #f7e7ce, #e4c3a0)"
      p={8}
      borderRadius="md"
      maxW="600px"
      mx="auto"
      mt={20}
      mb={3}
      boxShadow="2xl"
    >
      <VStack spacing={5} align="start">
        <Heading as="h2" size="xl" color="#8B4513">
          Order Details
        </Heading>
        <Divider borderColor="#8B4513" />
        <HStack spacing={3}>
          <Text fontSize="lg" fontWeight="bold" color="#D2691E">
            Order ID:
          </Text>
          <Tag size="lg" variant="solid" bg="#D2691E" color="white">
            {id}
          </Tag>
        </HStack>
        <HStack spacing={3}>
          <Text fontSize="lg" fontWeight="bold" color="#D2691E">
            Customer:
          </Text>
          <Text fontSize="lg" color="#8B4513">
            {customer}
          </Text>
        </HStack>
        <HStack spacing={3}>
          <Icon as={FaPhoneAlt} color="#D2691E" />
          <Text fontSize="lg" color="#8B4513">
            {phone}
          </Text>
        </HStack>
        <HStack spacing={3}>
          <Icon as={FaMapMarkerAlt} color="#D2691E" />
          <Text fontSize="lg" color="#8B4513">
            {address}
          </Text>
        </HStack>
        <HStack spacing={3}>
          <Icon as={FaClock} color="#D2691E" />
          <Text fontSize="lg" fontWeight="bold" color="#D2691E">
            Order Date:
          </Text>
          <Text fontSize="lg" color="#8B4513">
            {formatDate(createdAt)}
          </Text>
        </HStack>
        <HStack spacing={3}>
          <Text fontSize="lg" fontWeight="bold" color="#D2691E">
            Total Price:
          </Text>
          <Text fontSize="lg" color="#8B4513">
            {formatCurrency(orderPrice)}
          </Text>
        </HStack>
        <HStack spacing={3}>
          <Text fontSize="lg" fontWeight="bold" color="#D2691E">
            Estimated Delivery:
          </Text>
          <Text fontSize="lg" color="#8B4513">
            {estimatedDeliveryforOrder > 0
              ? `${estimatedDeliveryforOrder} minutes left`
              : "Delivered"}
          </Text>
        </HStack>
        {estimatedDeliveryforOrder > 0 ? (
          <Tag size="lg" colorScheme="green" borderRadius="full">
            <TagLeftIcon as={FaClock} />
            <TagLabel>On the way!</TagLabel>
          </Tag>
        ) : (
          <Tag size="lg" colorScheme="red" borderRadius="full">
            <TagLabel>Delivered</TagLabel>
          </Tag>
        )}
      </VStack>
    </Box>
  );
}

export default OrderDetails;
