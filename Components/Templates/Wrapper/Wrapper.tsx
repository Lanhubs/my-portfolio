import React from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";

import Link from "next/link";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineIdcard,
  AiOutlineFile,
  AiOutlineCloudDownload,
} from "react-icons/ai";
import { HiBars3, HiDevicePhoneMobile } from "react-icons/hi2";
import { GrAndroid } from "react-icons/gr";
import { useRouter } from "next/router";
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
  { name: "contact", link: "/contact", icon: <HiDevicePhoneMobile /> },
];
// Header component
const Header = () => {
  const route = useRouter();
  return (
    <Box
      height="70px"
      display={flex}
      alignItems="center"
      
      gap="1rem"
      position={"absolute"}
      p="1rem"
      bg="rgb(0, 0, 0)"
      w="full"
    >
      <SideBar>
        <Button
          display={{ base: "flex", md: "none" }}
          bg="rgba(255, 255, 255, 0.4)"
          color="#fff"
          rounded={10}
        >
          <HiBars3 fontSize={20} />
        </Button>
      </SideBar>
      <Box display={{ base: "none", md: flex }} alignItems="center" gap={1}>
        {links.map((item, idx) => (
          <Box
            key={idx}
            href={item.link}
            fontSize={20}
            px="1rem"
            w="fit-content"
            fontWeight={"bold"}
            textTransform="capitalize"
            color={route.pathname === item.link ? "green.600" : "#f2f2f2"}
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
  const route = useRouter();
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
                color={route.pathname === item.link ? "green.600" : "#f2f2f2"}
                key={idx}
                as={Link}
                href={item.link}
                fontSize={25}
              >
                {item.icon}
                <Text
                  fontSize={18}
                  color={route.pathname === item.link ? "green.600" : "#f2f2f2"}
                  textTransform="capitalize"
                  fontWeight={600}
                >
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
  const route = useRouter();
  return (
    <Box
      pos="fixed"
      left="0"
      // bottom="md"
      display={{ base: "none", md: flex }}
      alignItems="space-between"
      justifyContent="space-between"
      flexDir="column"
      height="100vh"
      py="5rem"
    >
      <Box
        display={{ base: "none", md: flex }}
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        height="60%"
        my="auto"
      >
        {links.map((item, idx) => (
          <Tooltip
            key={idx}
            placement="right-end"
            hasArrow={true}
            textTransform="capitalize"
            label={item.name}
          >
            <Box
              display={flex}
              alignItems="center"
              justifyContent="center"
              as={Link}
              color={route.pathname === item.link ? "green.600" : "#f2f2f2"}
              href={item.link}
              fontSize={35}
              p="1rem"
            >
              {item.icon}
            </Box>
          </Tooltip>
        ))}
      </Box>
      <DownloadResumeBtn />
    </Box>
  );
};
const DownloadResumeBtn = () => {
  const googleAuthToken = process.env.GOOGLE_AUTH_SECRET_TOKEN;
  return (
    <Tooltip hasArrow={true} placement="right-end" label="download resume">
      <Box
        alignSelf="flex-end"
        display="flex"
        alignItems="center"
        justifyContent="center"
        justifySelf="flex-end"
        color="green.500"
        fontSize={40}
        cursor="pointer"
        marginTop="auto"
        mx="auto"
        as={Link}
        // href="https://drive.google.com/file/d/1hMyvrsp7WokC67FIzz0HoDEkEdAAzQfE/view?usp=sharing"
        href="../../../assets/resume/Habeeb-Muhammed-Olanrewaju.pdf"
        download
        passHref
      >
        {downloadIcon}
      </Box>
    </Tooltip>
  );
};
const downloadIcon = <AiOutlineCloudDownload />;
export default Wrapper;
