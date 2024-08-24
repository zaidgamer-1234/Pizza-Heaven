import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  FormErrorMessage,
  Heading,
  Link,
  Flex,
  Text,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { createOrder } from "../Helper/apiRestaurant";
import { clearCart } from "../Slice/cartListSlice";
import { useState } from "react";

function CreateOrder() {
  const [isSubmit, setIsSubmit] = useState(false);
  const onSubmit = async (data) => {
    const orderData = {
      ...data,
      cart,
    };

    try {
      setIsSubmit(true);
      const data = await createOrder(orderData);
      setIsSubmit(false);
      navigate(`/order/${data.id}`, { state: { data } });
      dispatch(clearCart());
    } catch (error) {
      console.error("Failed to create order:", error.message);
    } finally {
      setIsSubmit(false);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const customer = useSelector((state) => state.customer.name);
  const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Box
      bg="#f8deb8"
      p={8}
      borderRadius="md"
      maxW="400px"
      mx="auto"
      mt={20}
      mb={3}
      boxShadow="lg"
    >
      <Flex mb={4}>
        <Link
          as={NavLink}
          to="/"
          color="#8B4513"
          _hover={{ textDecoration: "none" }}
          _activeLink={{
            color: "#FFD700",
            fontWeight: "bold",
          }}
        >
          <Flex alignItems="center">
            <FaArrowLeft />
            <Box ml={2}>Home</Box>
          </Flex>
        </Link>
      </Flex>

      {cart.length > 0 ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading
            as="h2"
            size="lg"
            mb={6}
            textAlign="center"
            color="#8B4513"
            fontFamily="serif"
          >
            Ready to order !!
          </Heading>
          <VStack spacing={4}>
            <FormControl isInvalid={errors.customer}>
              <FormLabel htmlFor="customer" color="#8B4513">
                Customer
              </FormLabel>
              <Input
                id="customer"
                placeholder="Enter your name"
                defaultValue={customer}
                {...register("customer", {
                  required: "Customer name is required",
                })}
                borderColor="#D2691E"
                _focus={{
                  borderColor: "#FFD700",
                  boxShadow: "0 0 0 1px #FFD700",
                }}
              />
              <FormErrorMessage>
                {errors.customer && errors.customer.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.phone}>
              <FormLabel htmlFor="phone" color="#8B4513">
                Phone number
              </FormLabel>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{11}$/,
                    message:
                      "Phone number must be exactly 11 digits or must be in digits",
                  },
                })}
                borderColor="#D2691E"
                _focus={{
                  borderColor: "#FFD700",
                  boxShadow: "0 0 0 1px #FFD700",
                }}
              />
              <FormErrorMessage>
                {errors.phone && errors.phone.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.address}>
              <FormLabel htmlFor="address" color="#8B4513">
                Address
              </FormLabel>
              <Input
                id="address"
                placeholder="Enter your address"
                {...register("address", {
                  required: "Address is required",
                })}
                borderColor="#D2691E"
                _focus={{
                  borderColor: "#FFD700",
                  boxShadow: "0 0 0 1px #FFD700",
                }}
              />
              <FormErrorMessage>
                {errors.address && errors.address.message}
              </FormErrorMessage>
            </FormControl>

            <Button
              type="submit"
              colorScheme="orange"
              width="full"
              bg="#D2691E"
              _hover={{ bg: "#FFD700" }}
            >
              {isSubmit ? "Submitting" : "Submit Order"}
            </Button>
          </VStack>
        </form>
      ) : (
        <Text textAlign="center" color="#8B4513">
          Your cart is empty. Please add items to the cart before placing an
          order.
        </Text>
      )}
    </Box>
  );
}

export default CreateOrder;
