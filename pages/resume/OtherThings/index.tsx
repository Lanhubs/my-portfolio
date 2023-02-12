import { Box, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillCodepenCircle, AiOutlineBook } from "react-icons/ai";
import {
  FaBookOpen,
  FaCube,
  FaFootballBall,
  FaResearchgate,
} from "react-icons/fa";
import { GrCubes } from "react-icons/gr";
import {
  HiBookOpen,
  HiCodeBracket,
  HiCube,
  HiOutlinePuzzlePiece,
} from "react-icons/hi2";
import GithubDetails from "../../../Components/Utils/GithubDetails";

type Props = {};

const OtherThings = (props: Props) => {
  return (
    <Stack gap="2rem" flexDir="column" color="#f3f3f3">
      {/* what i do */}
      <Stack>
        <Heading
          textTransform="uppercase"
          width="fit-content"
          borderBottom="2px solid green"
        >
          What I do
        </Heading>
        <Text
          textTransform="capitalize"
          fontSize={18}
          lineHeight={10}
          width="400px"
        >
          Web Applications - Responsive web application - Frontend - Full Stack
          - Cross platform mobile application - Backend APIs
        </Text>
      </Stack>
      <Stack>
        <Heading
          textTransform="uppercase"
          width="fit-content"
          borderBottom="2px solid green"
        >
          Hobbies
        </Heading>
        <HStack gap="1rem" alignItems="center">
          {hobbies.map((item, idx) => (
            <HStack key={idx} textTransform="capitalize">
              <Box
                color="#fff"
                fontSize={25}
                border="1.5px solid #f3f3f3"
                rounded="full"
                p="6px"
              >
                {item.icon}
              </Box>
              <Text>{item.name}</Text>
            </HStack>
          ))}
        </HStack>
      </Stack>
      <GithubDetails />
    </Stack>
  );
};

export default OtherThings;
const hobbies = [
  {
    name: "Coding",
    icon: <HiCodeBracket />,
  },
  {
    name: "research",
    icon: <FaResearchgate />,
  },
  {
    name: "reading",
    icon: <HiBookOpen />,
  },
  ,
  {
    name: "Solving problems",
    icon: <HiOutlinePuzzlePiece />,
  },
];
