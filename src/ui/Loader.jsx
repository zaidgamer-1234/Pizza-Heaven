import { Flex } from "@chakra-ui/react";
import { CircularProgress } from "@chakra-ui/react";

function Loader() {
  return (
    <Flex justify="center" align="center" minH="100vh" width="100vw">
      <CircularProgress isIndeterminate color="yellow.300" />
    </Flex>
  );
}

export default Loader;
