import {
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
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
        height={{ base: "50%", md: "100vh" }}
        gap={10}
      >
        {/* profile image */}
        <VStack
          as="div"
          className={styles.profilePic}
          backgroundSize="cover"
          width={{ base: "", md: "35%" }}
          height="100%"
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
        <Stack py="5%" flex={1} height="100%">
          <Heading
            color="whiteAlpha.800"
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
          <Text mt="2rem" marginTop="2rem" color="whiteAlpha.600" w="90%" fontSize={18} lineHeight="8">
            Prolific full stack MERN Stack web developer with a passion for
            beating my "past-bests". Improving My Services by building challenging
            web applications using challenging but innovative web technogies.
            Always looking for the best technologies to adopt upon beuilding a
            product with the right designs. Always open to learning new
            technologies whether to solve a problem or to improve my
            proficiency. And always open to working with a team to learn and to
            build great products that best solve the problems.
          </Text>
          <Box justifyContent="center" display="flex" justifySelf="flex-end" alignSelf={"flex-end"} color="#f1f1f1" flexDir="column">
                <Text>Kano or Ilorin Nigeria</Text>
                <Text>Gwarzo Road or Ganmo</Text>

          </Box>
        </Stack>
      </Flex>
    </Wrapper>
  );
};

export default index;
