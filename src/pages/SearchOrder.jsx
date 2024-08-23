import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaPizzaSlice } from "react-icons/fa";

function SearchOrder() {
  return (
    <forn>
      <InputGroup maxW="500px">
        <InputLeftElement>
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
    </forn>
  );
}

export default SearchOrder;
