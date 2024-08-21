import { useNavigate, useRouteError } from "react-router-dom";
import { Box, Text, Button } from "@chakra-ui/react";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <Box
      bg="#FFF8DC"
      minH="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      p={6}
    >
      <Box bg="red.500" p={8} borderRadius="md" boxShadow="md">
        <Text as="h1" fontSize="4xl" fontWeight="bold" color="white">
          Something went wrong
        </Text>
        <Text mt={4} fontSize="lg" color="white">
          Error: {error.data || error.message}
        </Text>
        <Button
          onClick={() => navigate(-1)}
          mt={6}
          colorScheme="yellow"
          variant="solid"
          borderRadius="full"
          size="lg"
          _hover={{ bg: "yellow.400" }}
        >
          Go back
        </Button>
      </Box>
    </Box>
  );
}

export default Error;
