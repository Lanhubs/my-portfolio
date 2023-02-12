import { Box, Flex, Spinner } from "@chakra-ui/react";
import React, { Suspense } from "react";

const Loader = () => {
  return (
    <Box
      w="100vw"
      height="100vw"
      width="100vw"
      as={Flex}
      alignItems="center"
      justifyContent="center"
      //   backgroundColor="#000"
      colorScheme="whiteAlpha"
    >
      <Spinner />
    </Box>
  );
};

export default Loader;
