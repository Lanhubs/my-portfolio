import React, { useEffect } from "react";
import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import Wrapper from "../../Components/Templates/Wrapper/Wrapper";
import { NextRouter, Router, useRouter } from "next/router";
import ContactMeForm from "./ContactMeForm";
import ContactIntro from "./ContactIntro";
import Contacts from "./Contacts";
type Props = {
  route: NextRouter;
};

const ContactMe = (props: Props) => {
  const route:NextRouter = useRouter()

  return (
    <Wrapper>
      <Box
        padding={{ base: "10% auto", md: "7%" }}
        w="full"
        height={{ base: "full", md: "100vh" }}
        minH="full"
        >
        <Grid
        paddingTop={{base: "17%", md: 0}}
          gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
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

export default ContactMe;
