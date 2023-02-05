import React from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import Link from "next/link";
import {
  AiOutlineBars,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineIdcard,
  AiOutlineFile,
  AiOutlinePhone,
} from "react-icons/ai";
import { HiBars3 } from "react-icons/hi2";
import { GrAndroid } from "react-icons/gr";
interface Props {
  children: React.ReactNode;
}

const Wrapper = (props: Props) => {
  return (
    <>
      <SideShortCut />
      <Box w="100vw" height={{ base: "100%", md: "100vh" }} background="#000">
        <Header />
        {/* main container */}
        <Box ml={{ base: 0, md: 0 }} bg="rgba(0, 0, 0)">
          {props.children}
        </Box>
      </Box>
    </>
  );
};

const links = [
  { name: "Home", link: "/", icon: <AiOutlineHome /> },
  { name: "About Me", link: "/about", icon: <AiOutlineUser /> },
  { name: "Resume", icon: <AiOutlineFile />, link: "/resume" },
  { name: "Projects", link: "/projects", icon: <AiOutlineIdcard /> },
  { name: "contact", link: "/contact", icon: <GrAndroid /> },
];
// Header component
const Header = () => {
  return (
    <Box
      height="10%"
      display={flex}
      alignItems="center"
      gap="1rem"
      position="fixed"
      p="1rem"
      bg="rgba(0, 0, 0, 0.5)"
      w="full"
    >
      <SideBar>
        <Button
          display={{ base: "flex", md: "flex" }}
          bg="rgba(255, 255, 255, 0.4)"
          color="#fff"
          rounded={0}
          children={<HiBars3 fontSize={20} />}
        />
      </SideBar>
      <Box display={{ base: "none", md: flex }} alignItems="center" gap={1}>
        {links.map((item, idx) => (
          <Box
            key={idx}
            href={item.link}
            fontSize={20}
            px="1rem"
            w="fit-content"
            color="#f2f2f2"
            as={Link}
          >
            {item.name}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
const SideBar = (props: Props) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <span onClick={() => onOpen()}>{props.children}</span>
      <Drawer onClose={onClose} isOpen={isOpen} placement="left">
        <DrawerBody bgColor={"rgb(0, 0, 0)"} textColor="#fff" w="80%">
          <DrawerOverlay />
          {/* <VStack  my="10"> */}
          <DrawerContent
            background="rgb(0, 0, 0)"
            display={{ base: "flex", md: "none" }}
            flexDir="column"
            width="full"
            height="100vh"
            py="4rem"
          >
            {links.map((item, idx) => (
              <Box
                display={flex}
                py="1rem"
                gap="1rem"
                px="1rem"
                _hover={{
                  background: "rgba(255, 255, 255, 0.5)",
                  color: "#D3D3D3",
                }}
                alignItems="center"
                color="#f1f1f1"
                key={idx}
                as={Link}
                href={item.link}
                fontSize={25}
              >
                {item.icon}
                <Text fontSize={18} color="#f1f1f1" fontWeight={600}>
                  {item.name}
                </Text>
              </Box>
            ))}
          </DrawerContent>
          {/* </VStack> */}
        </DrawerBody>
      </Drawer>
    </>
  );
};
const flex =
  "flex" || "-ms-flex" || "-ms-flexbox" || "-webkit-flex" || "flexbox";
const SideShortCut = () => {
  return (
    <Box
      pos="fixed"
      left="0"
      bottom="md"
      display={{ base: "none", md: flex }}
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      height="100vh"
    >
      <Box
        display={{ base: "none", md: flex }}
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        height="60%"
      >
        {links.map((item, idx) => (
          <Box
            display={flex}
            alignItems="center"
            justifyContent="center"
            key={idx}
            as={Link}
            color="#f1f1f1"
            href={item.link}
            fontSize={35}
            p="1rem"
          >
            {item.icon}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default Wrapper;
