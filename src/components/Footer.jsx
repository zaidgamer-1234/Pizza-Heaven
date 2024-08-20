import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Stack,
  Divider,
} from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="#8B4513" color="#FFF8DC" py={12} px={4}>
      <Divider borderColor="#D2691E" mb={10} />
      <Stack spacing={4} textAlign="center">
        <Heading as="h2" size="md" fontFamily="serif" color="#FFD700">
          Pizza Heaven
        </Heading>
        <Stack spacing={4} textAlign="center">
          <Text fontSize="sm" color="#FFF8DC">
            Follow us on social media:
          </Text>
          <Flex justify="center" spacing={4} gap={5}>
            <Link href="https://www.instagram.com/pizzaheaven" isExternal>
              <FaInstagram size="1.5em" color="#FFF8DC" />
            </Link>
            <Link href="https://www.facebook.com/pizzaheaven" isExternal>
              <FaFacebook size="1.5em" color="#FFF8DC" />
            </Link>
            <Link href="https://twitter.com/pizzaheaven" isExternal>
              <FaTwitter size="1.5em" color="#FFF8DC" />
            </Link>

            <Link href="mailto:contact@pizzaheaven.com" isExternal>
              <FaEnvelope size="1.5em" color="#FFF8DC" />
            </Link>
          </Flex>
        </Stack>
        <Text fontSize="sm" color="#FFF8DC">
          &copy; {new Date().getFullYear()} Pizza Heaven. All rights reserved.
        </Text>
      </Stack>
    </Box>
  );
};

export default Footer;
