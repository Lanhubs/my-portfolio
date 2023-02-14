import {
  Avatar,
  Box,
  Heading,
  HStack,
  Text,
  Image as Img,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useGithubStats from "react-github-user-stats";
import GitHubCalendar from "react-github-calendar";
import { Loader } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
const userData = () => {
  const { error, loading, userData } = useGithubStats("Lanhubs");
  const [userDetails, setuserData] = useState({});
  const [isloading, setLoading] = useState(false);
  console.log(userData)
  useEffect(() => {
   
    if (loading) {
      setLoading(true);
    }
    setLoading(false);
    setuserData(userData);
  }, []);
  return (
    <Box
      display="flex"
      alignItems={loading ? "center" : ""}
      justifyContent={loading ? "center" : ""}
      width="100%"
      flex={1}
    >
      {loading ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="inherit"
        >
          <Loader type="spin" />
        </Box>
      ) : (
        <Stack flexDir="column" gap="1rem">
          <Heading>Github Details</Heading>
          <HStack as={Link} href="https://github.com/Lanhubs">
            {/* <Avatar src={userData ? userData?.avatar_url: ""} as={Image} /> */}
            
            
            
            <Img
              rounded="full"
              alt="git profile pic"
              src={userData?.avatar_url}
              width={70}
            />
            <Text fontSize={18} fontWeight={600}>
              {userData?.username}
            </Text>
          </HStack>
          <Text>Bio: {userData?.bio}</Text>
          {/* <Text>Stars: {userData?.stars}</Text> */}
          {/* github calendar*/}
          <GitHubCalendar username="Lanhubs" />
        </Stack>
      )}
    </Box>
  );
};

export default userData;
