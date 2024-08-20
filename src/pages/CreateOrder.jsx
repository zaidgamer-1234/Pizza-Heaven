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
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function CreateOrder() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      bg="#f8deb8"
      p={8}
      borderRadius="md"
      maxW="400px"
      mx="auto"
      mt={3}
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4}>
          <FormControl isInvalid={errors.username}>
            <FormLabel htmlFor="username" color="#8B4513">
              Username
            </FormLabel>
            <Input
              id="username"
              placeholder="Enter your username"
              {...register("username", { required: "Username is required" })}
              borderColor="#D2691E"
              _focus={{
                borderColor: "#FFD700",
                boxShadow: "0 0 0 1px #FFD700",
              }}
            />
            <FormErrorMessage>
              {errors.username && errors.username.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.email}>
            <FormLabel htmlFor="email" color="#8B4513">
              Mobile number
            </FormLabel>
            <Input
              id="mobile"
              type="tel"
              placeholder="Enter your mobile number"
              {...register("mobile", {
                required: "Mobile number is required",
                pattern: {
                  value: /^\d{11}$/,
                  message: "Invalid mobile number",
                },
              })}
              borderColor="#D2691E"
              _focus={{
                borderColor: "#FFD700",
                boxShadow: "0 0 0 1px #FFD700",
              }}
            />

            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.geolocation}>
            <FormLabel htmlFor="geolocation" color="#8B4513">
              Geolocation
            </FormLabel>
            <Input
              id="geolocation"
              placeholder="Enter your location"
              {...register("geolocation", {
                required: "Geolocation is required",
              })}
              borderColor="#D2691E"
              _focus={{
                borderColor: "#FFD700",
                boxShadow: "0 0 0 1px #FFD700",
              }}
            />
            <FormErrorMessage>
              {errors.geolocation && errors.geolocation.message}
            </FormErrorMessage>
          </FormControl>

          <Button
            type="submit"
            colorScheme="orange"
            width="full"
            bg="#D2691E"
            _hover={{ bg: "#FFD700" }}
          >
            Submit Order
          </Button>
        </VStack>
      </form>
    </Box>
  );
}

export default CreateOrder;
