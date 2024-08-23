import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useState } from "react";
import { FaPizzaSlice } from "react-icons/fa";
import { getOrder } from "../Helper/apiRestaurant";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query) return;

    try {
      const order = await getOrder(query);
      console.log(order);
      if (order) navigate(`/order/${query}`);
    } catch (error) {
      console.error(error.message);
    }
    setQuery("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputGroup maxW="500px">
        <InputLeftElement>
          <FaPizzaSlice color="#22211f" size="1.5em" />
        </InputLeftElement>
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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
    </form>
  );
}

export default SearchOrder;
