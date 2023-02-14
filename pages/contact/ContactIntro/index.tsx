import { FormControl, Grid, GridItem, Input, Text } from "@chakra-ui/react";
import React from "react";

const ContactIntro = () => {
  return (
    <GridItem
      as="form"
      padding="1rem"
      display={"flex"}
      flexDir="column"
      alignItems="center"
      gridRow={1 / 2}
      gridColumn={1/ 3}
      background="#fff"
    >
        <Text>
            Hello
        </Text>
    </GridItem>
  );
};

export default ContactIntro;


