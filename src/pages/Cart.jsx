import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Heading,
  VStack,
  Button,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { removeItem, clearCart } from "../Slice/cartListSlice";

function Cart() {
  const name = useSelector((state) => state.customer.name);
  const cartList = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (pizzaId) => {
    dispatch(removeItem(pizzaId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const orderPizzas = () => {
    navigate("/neworder");
  };
  const groupedItems = cartList.reduce((acc, item) => {
    if (acc[item.pizzaId]) {
      acc[item.pizzaId].quantity += item.quantity;
    } else {
      acc[item.pizzaId] = { ...item, quantity: item.quantity };
    }
    return acc;
  }, {});

  return (
    <Box
      minH="100vh"
      p={4}
      display="flex"
      flexDirection="column"
      maxW="container.md"
      mx="auto"
    >
      <Flex mb={4} align="center" justify="flex-start">
        <NavLink to="/menu">&larr; Go back to Menu</NavLink>
      </Flex>
      <Heading mb={6} textAlign="center" color="#8B4513">
        Your Cart, {name}
      </Heading>
      <VStack spacing={4} align="stretch" flex="1">
        {Object.values(groupedItems).length === 0 ? (
          <Text textAlign="center" color="gray.500" fontSize="24px">
            Your cart is empty.
          </Text>
        ) : (
          Object.values(groupedItems).map((item) => (
            <Box
              key={item.pizzaId}
              borderWidth="1px"
              borderRadius="md"
              overflow="hidden"
              p={4}
              bg="#f8db65"
              boxShadow="md"
              position="relative"
            >
              <Flex justify="space-between" align="center">
                <Text fontWeight="bold" color="#8B4513">
                  {item.name}
                </Text>
                <Flex direction="column" align="flex-end" gap={1}>
                  <Text color="#D2691E" textAlign="center">
                    ${item.unitPrice.toFixed(2)} x {item.quantity} = $
                    {(item.unitPrice * item.quantity).toFixed(2)}
                  </Text>
                  <IconButton
                    icon={<FaTrash />}
                    colorScheme="red"
                    variant="outline"
                    aria-label="Delete item"
                    onClick={() => handleDelete(item.pizzaId)}
                  />
                </Flex>
              </Flex>
              <Divider my={2} />
            </Box>
          ))
        )}
        <Flex mt={2} gap={3} pt={2} mb={12}>
          <Button
            colorScheme="teal"
            variant="solid"
            width="20%"
            onClick={orderPizzas}
          >
            Order Pizzas
          </Button>
          <Button
            colorScheme="red"
            variant="outline"
            width="20%"
            onClick={handleClearCart}
          >
            Clear Cart
          </Button>
        </Flex>
      </VStack>
    </Box>
  );
}

export default Cart;
