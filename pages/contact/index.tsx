import React, { useEffect } from "react";
import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import Wrapper from "../../Components/Templates/Wrapper/Wrapper";
import { NextRouter, useRouter } from "next/router";
import ContactMeForm from "./ContactMeForm";
import ContactIntro from "./ContactIntro";
import Contacts from "./Contacts";
type Props = {
  route: NextRouter;
};

const index = (props: Props) => {
  const route = useRouter();

  return (
    <Wrapper>
      <Box  padding={{base: "10% 7%", md:"7%"}} w="full" height={{base:"full", md: "100vh"}} minH="full">
        <Grid
          
          gridTemplateColumns={ "1fr 1fr"}
          m="auto"
          width={{ base: "90%", md: "60%" }}
          height="90%"
          gap="1rem"
        >
          <ContactMeForm />
          <ContactIntro />
          <Contacts />
        </Grid>
      </Box>
    </Wrapper>
  );
};

export default index;
