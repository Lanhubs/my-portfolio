import React, { useEffect } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Wrapper from "../../Components/Templates/Wrapper/Wrapper";
import { NextRouter, useRouter } from "next/router";
type Props = {
  route: NextRouter;
};

const index = (props: Props) => {
  const route = useRouter();

  return (
    <Wrapper>
      <Box color="#f2f2f2" padding={"7%"} w="full" height="full" minH="full">
        <Heading>Contact me</Heading>
        <Text>You can reach me using any of this means</Text>
        
      </Box>
    </Wrapper>
  );
};

export default index;
