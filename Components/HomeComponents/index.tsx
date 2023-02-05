import React from "react";
import { Box, Flex, Grid, HStack, Image as Img, VStack } from "@chakra-ui/react";
import Image from "next/image";
import myImg from "../../assets/me.png";
import {
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlineFacebook,
} from "react-icons/ai";
import Link from "next/link";
type Props = {};

const Details = (props: Props) => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      padding={{ base: "2rem", md: "3.5rem 7%" }}
      height={{ base: "50%", md: "70%" }}
    >
      <VStack className="profilePic" as="div" width={{base:"", md: "30%"}} height="100%">
        <Img
          as={Image}
          height={{base: "100%", md:"81vh"}}
          width="100%"
          
          backgroundColor="rgba(0, 0, 0, 0.5)"
          bgBlendMode="darken"
          // blendMode="darken"
          src={myImg}
          
          alt="my image"
        />
        <HStack>
          {contactLinks.map((item, idx) => (
            <Box as={Link} color="whiteAlpha.600" href={item.link} fontSize={30} key={idx}>
              {item.icon}
            </Box>
          ))}
        </HStack>
      </VStack>
      <Grid flex={1}>

      </Grid>
    </Flex>
  );
};
export default Details;

const contactLinks = [
  {
    icon: <AiOutlineLinkedin />,
    link: "https://www.linkedin.com/in/lanre-muh-d-71a721227/",
    name: "linkedIn",
  },
  {
    icon: <AiOutlineWhatsApp />,
    link: "https://wa.me/+2348108685989",
    name: "whatsapp",
  },
  {
    icon: <AiOutlineMail />,
    link: "muhammedolanrewaju56@gmail.com",
    name: "gmail",
  },
  {
    icon: <AiOutlineGithub />,
    link: "https://github.com/Lanhubs",
    name: "Github",
  },
  {
    icon: <AiOutlineTwitter />,
    link: "https://twitter.com/Habeebllahi8",
    name: "twitter",
  },
  {
    icon: <AiOutlineFacebook />,
    name: "facebook",
    link: "https://www.facebook.com/habeeb.muhammad.758/",
  },
];
