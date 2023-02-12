import { Avatar, Box, Heading, HStack, Text, VStack, Image as Img, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useGithubStats from "react-github-user-stats";
import GitHubCalendar from "react-github-calendar";
import { Loader } from "@mantine/core";
import Image from "next/image";
const userData = () => {
  const { error, loading, userData } = useGithubStats("Lanhubs");
  const [userDetails, setuserData] = useState({});
  const [isloading, setLoading] = useState(false);
  useEffect(() => {
    console.log(userData);
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
          <HStack>
            {/* <Avatar src={userData ? userData?.avatar_url: ""} as={Image} /> */}
          <Text>Username: {userData?.username}</Text>
          </HStack>
          <Text>Bio: {userData?.bio}</Text>
          {/* <Text>Stars: {userData?.stars}</Text> */}
          {/* github calendar*/}
          <Box username="Lanhubs" as={GitHubCalendar} />
        </Stack>
      )}
    </Box>
  );
};

export default userData;
