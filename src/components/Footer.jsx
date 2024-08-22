import { useSelector } from "react-redux";
import { Box, Flex, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { formatCurrency } from "../Helper/helpers";

const Footer = () => {
  const totalQuantity = useSelector((state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)
  );
  const totalPrice = useSelector((state) =>
    state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0)
  );
  if (!totalQuantity) return;

  return (
    <Box
      bg="#2D2D2D"
      color="#fff"
      p={1}
      position="fixed"
      bottom="0"
      width="100%"
    >
      <Flex align="center" gap={6}>
        <Flex align="center" gap={4}>
          <Text fontSize="lg"> {totalQuantity} PIZZAS</Text>
          <Text fontSize="lg">Total Price: {formatCurrency(totalPrice)}</Text>
        </Flex>
      </Flex>
      <Flex justify="flex-end" position="relative" bottom={6}>
        <NavLink to="/cart">OPEN CART &rarr;</NavLink>
      </Flex>
    </Box>
  );
};

export default Footer;
