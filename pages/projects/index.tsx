import {
  Avatar,
  Box,
  Flex,
  HStack,
  Text,
  Card,
  CardBody,
  Heading,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Link from "next/link";
import Wrapper from "../../Components/Templates/Wrapper/Wrapper";
import { Image as Img } from "@chakra-ui/react";
import ccbnaijaImg from "../../assets/ccbnaija.png";
import topupcliqImg from "../../assets/topupcliq.png";
import Image, { StaticImageData } from "next/image";
import Loader from "../../Components/Utils/Loader";

type Props = {
  image: StaticImageData;
  children: ReactNode;
  projName: string;
  link: string;
  companyName: string;
  companyLogo: string;
  companyLink: string;
};

const index = (props: Props) => {
  return (
      <Wrapper>
        <Box
          color="whiteAlpha.700"
          padding={{ base: "15% 7%", md: "7%" }}
          height={{ base: "100%", md: "100%" }}
          width={"100vw"}
        >
          <Heading>Projects</Heading>
          <Text>Projects worked on so far for companies</Text>
          <Flex
            mt="2rem"
            flexWrap="wrap"
            gap="1.5rem"
            flexDir={{ base: "column", md: "row" }}
          >
            {projects.map((item, idx) => (
              <Project
                key={idx}
                companyLink={item.companyLink}
                companyName={item.companyName}
                projName={item.projName}
                image={item.image}
                link={item.link}
                companyLogo={item.companyLogo}
              />
            ))}
          </Flex>
        </Box>
      </Wrapper>
    
  );
};
const Project = ({
  image,
  link,
  projName,
  companyLogo,
  companyName,
  companyLink,
}: Props) => {
  return (
    <Box
      width={{ base: "100%", md: "30%" }}
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
        <Img
          as={Image}
          src={image}
          alt={projName}
          width="100%"
          flex={1}
          height="90%"
        />
        <Flex alignItems="center">
          <Box
            as={Link}
            fontWeight={600}
            my="1rem"
            href={link}
            width="fit-content"
          >
            {projName}
          </Box>
        </Flex>
      </Box>
      <HStack as={Link} href={companyLink}>
        <Avatar src={companyLogo} width="50px" height="50px" />
        <Text fontWeight={700} fontSize={18}>
          {companyName}
        </Text>
      </HStack>
    </Box>
  );
};

export default index;

const projects = [
  {
    projName: "TopupCliq",
    companyName: "Codesquad LLC",
    image: topupcliqImg,
    link: "https://sandbox.dash.topupcliq.com",
    companyLogo: "",
    companyLink: "",
  },
  {
    projName: "CCBNAIJA",
    companyName: "Codesquad LLC",
    image: ccbnaijaImg,
    link: "https://ccbnaija.com",
    companyLogo: "",
    companyLink: "",
  },
];
