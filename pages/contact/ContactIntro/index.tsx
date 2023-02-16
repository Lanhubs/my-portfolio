import { FormControl, Grid, GridItem, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";

const ContactIntro = () => {
  return (
    <GridItem
      as="form"
      padding="1rem"
      display={"flex"}
      flexDir="column"
      alignItems="flex-start"
      justifyContent="center"
      gap="1rem"
      gridRow={1 / 2}
      gridColumn={1/ 3}
      background="rgba(0, 0, 0, 0.5)"
      color={"#f3f3f3"}
    >
        <Heading fontSize={40} fontFamily="sans-serif">
            You can contact me
        </Heading>
        <Text >Sending a news letter or using any of the below for jobs, as a client or consultancy. will surely deliver</Text>
    </GridItem>
  );
};

export default ContactIntro;


