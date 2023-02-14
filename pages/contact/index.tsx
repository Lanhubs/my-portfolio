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
      <Box color="#f2f2f2" padding={{base: "10% 7%", md:"7%"}} w="full" height={{base:"full", md: "100vh"}} minH="full">
        <Grid
          
          gridColumn={{base: 1, md: "auto auto"}}
          m="auto"
          width={{ base: "90%", md: "70%" }}
          height="80%"
          gap="1rem"
          background="#f3f3f3"
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
