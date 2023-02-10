import React from "react";
import styles from "../../styles/Home.module.css";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image as Img,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";

import Link from "next/link";
import { contactLinks, skills } from "../data";

type Props = {};

const Details = (props: Props) => {
  return (
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
      <Stack py="5%" flex={1} height="100%" gap="1rem">
        <Heading
          color="whiteAlpha.800"
          textTransform="capitalize"
        >
          about me
        </Heading>
        <Text color="whiteAlpha.600" w="90%">
          Prolific full stack MERN Stack web developer with a passion for beating my
          "past-bests". Improving My Services by building challenging web
          applications using challenging but helpful web technogies. Always
          looking for the best technologies to adopt upon beuilding a product
          with the right designs. Always open to learning new technologies
          whether to solve a problem or to improve my proficiency. And always open
          to working with a team to learn and to build great products that best solve
          the problems.
        </Text>
        <Heading
          color="whiteAlpha.800"
          alignSelf="flex-start"
          justifySelf="flex-start"
        >
          My Services
        </Heading>
        <Grid
          gridTemplateColumns="1fr 1fr"
          gap={10}
          width="90%"
          as="div"
          // className={styles.skillsGrid}
        >
          {skills.map((item, idx) => (
            <GridItem
              padding="1rem"
              key={idx}
              display="flex"
              flexDir="column"
              gap={1}
            >
              <Heading color="green.700">{item.icon}</Heading>
              <Heading color="whiteAlpha.800" fontSize={20}>
                {item.skill}
              </Heading>

              <Text color="whiteAlpha.500">{item.about}</Text>
            </GridItem>
          ))}
        </Grid>
      </Stack>
    </Flex>
  );
};
export default Details;
