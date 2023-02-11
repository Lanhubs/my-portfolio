import { Avatar, Box, Flex, HStack, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Link from "next/link";
import Wrapper from "../../Components/Templates/Wrapper/Wrapper";
import { Image as Img } from "@chakra-ui/react";
type Props = {
  image: string,
  children: ReactNode,
  projName: string,
  link: string,
  companyName: string,
  companyLogo: string,
  companyLink: string
};

const index = (props: Props) => {
  return (
    <Wrapper>
      <Box padding="7%" height={{base: "100%", md: "100%"}} width={'100vw'}></Box>
    </Wrapper>
  );
};
const Project = ({
  image,
  link,
  projName,
  companyLogo,
  companyName,
  companyLink
}: Props) => {
  return (
    <Box
      width={{ base: "80%", md: "25%" }}
      shadow="md"
      background="rgba(0, 0, 0, 0.5)"
      display="flex"
      flexDir="column"
    >
      <Box
        width={"100%"}
        shadow="md"
        background="rgba(0, 0, 0, 0.5)"
        height="300px"
        display="flex"
        flexDir="column"
      >
        <Img src={image} width="100%" flex={1} height="90%" />
        <Flex alignItems="center" >
          <Box as={Link} href={link} width="fit-content">
            {projName}
          </Box>

        </Flex>
      </Box>
      <HStack as={Link} href={companyLink}>
        <Avatar src={companyLogo} width="50px" height="50px"/>
        <Text>{companyName}</Text>
      </HStack>
    </Box>
  );
};

export default index;
