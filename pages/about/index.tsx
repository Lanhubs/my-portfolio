import {
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { contactLinks } from "../../Components/data";
import Wrapper from "../../Components/Templates/Wrapper/Wrapper";
import styles from "../../styles/Home.module.css";

type Props = {};

const index = (props: Props) => {
  return (
    <Wrapper>
      <Flex
        direction={{ base: "column", md: "row" }}
        padding={{ base: "2rem", md: "3.5rem 5%" }}
        height={{ base: "100%", md: "100vh" }}
        gap={{ base: "1rem", md: 10 }}
      >
        {/* profile image */}
        <VStack
          as="div"
          className={styles.profilePic}
          backgroundSize="cover"
          marginTop={{ base: "10%", md: 0 }}
          width={{ base: "100%", md: "35%" }}
          height={{ base: "400px", md: "100%" }}
        >
          <Flex
            height="20%"
            marginTop="auto"
            marginBottom="0"
            as="div"
            className={styles.myImg}
            // py="1rem"
            flexDir="column"
            gap="0.7rem"
            alignItems="center"
            justifyContent="center"
            width="full"
          >
            <Heading fontSize={20} color="whiteAlpha.700">
              Habeeb Muhammed Olanrewaju
            </Heading>
            <Text
              color="green.600"
              textTransform="capitalize"
              letterSpacing={1}
              fontSize={18}
            >
              Software developer
            </Text>
            <HStack gap={1}>
              {contactLinks.map((item, idx) => (
                <Box
                  as={Link}
                  color="whiteAlpha.600"
                  href={item.link}
                  fontSize={30}
                  key={idx}
                >
                  {item.icon}
                </Box>
              ))}
            </HStack>
          </Flex>
        </VStack>
        <Stack
          py="5%"
          flex={1}
          height="100%"
          width={{ base: "100%", md: "" }}
          as="div"
          className={styles.aboutMe}
        >
          <Heading
            color={useColorModeValue("whiteAlpha.800", "blackAlpha.800")}
            fontSize={30}
            textTransform="capitalize"
          >
            about me
          </Heading>
          <Box
            as={Link}
            color="whiteAlpha.600"
            href={"muhammedolanrewaju56@gmail.com"}
          >
            muhammedolanrewaju56@gmail.com
          </Box>
          <Text
            mt="2rem"
            marginTop="2rem"
            color="whiteAlpha.600"
            w={{base: "100%", md:"90%"}}
            fontSize={18}
            lineHeight="8"
          >
            Prolific full stack MERN Stack web developer with a passion for
            beating my &quot;past-bests &quot;. Improving My Services by
            building challenging web applications using challenging but
            innovative web technogies. Always looking for the best technologies
            to adopt upon beuilding a product with the right designs. Always
            open to learning new technologies whether to solve a problem or to
            improve my proficiency. And always open to working with a team to
            learn and to build great products that best solve the problems.
          </Text>
          <Box
            display="flex"
            justifySelf="flex-end"
            color="#f1f1f1"
            justifyContent="flex-end"
            alignItems="center"
            flexDir="column"
            flex={1}
          >
            <Text fontSize="larger" fontWeight="bold">
              Gwarzo Road, Kano Nigeria
            </Text>
            <Text
              _before={{
                content: '""',
                width: "50px",
                backgroundColor: "green",
              }}
              _after={{
                content: '""',
                width: "50px",
                backgroundColor: "green",
              }}
              fontSize="larger"
              fontWeight="bold"
            >
              Ga-akanbi Ilorin Nigeria
            </Text>
          </Box>
        </Stack>
      </Flex>
    </Wrapper>
  );
};

export default index;
