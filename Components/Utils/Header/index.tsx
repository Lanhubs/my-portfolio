import React, { useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {};
const Header = ({}: Props) => {
  const route = useRouter();
  useEffect(() => {}, []);
  return (
    <Box w="100vw" px="10%" height="10%" py="1rem">
      <Flex alignItems="center" justifyContent="space-between">
        <HStack>
          {headerLinks.map((item, idx) => (
            <Box
              p="10px"
              color={
                route.pathname.replace("/", "") === item.link
                ? "green.600"
                : "whiteAlpha.700"
              }
              fontSize={18}
              as={Link}
              href={item.link}
              key={idx}
            >
              {item.text}
            </Box>
          ))}
        </HStack>
        <Heading color="whiteAlpha.700">Lanre Portfolio</Heading>
      </Flex>
    </Box>
  );
};

const headerLinks = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "About Me",
    link: "/about",
  },
  {
    text: "Resume",
    link: "/resume",
  },
  {
    text: "portfolio",
    link: "/portfolio",
  },
];

export default Header;
