import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Wrapper from "../../Components/Templates/Wrapper/Wrapper";
import Skills from "./Skills";
import Experiences from "./Experiences";
import OtherThings from "./OtherThings";
type Props = {};

const index = (props: Props) => {
  return (
    <Wrapper>
      <Box padding={{ base: "20% 7%", md: "7%" }} w={"100vw"}>
        <Flex
          gap="10%"
          flexDir={{ base: "column-reverse", md: "row" }}
          width="100%"
        >
          <Skills />
          <Experiences />
          <OtherThings />
        </Flex>
      </Box>
    </Wrapper>
  );
};

export default index;
