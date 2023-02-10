import {
  Flex,
  Box,
  Stack,
  Heading,
  HStack,
  Text,
  Progress,
  RangeSlider,
  RangeSliderThumb,
  RangeSliderMark,
  SliderFilledTrack,
  RangeSliderFilledTrack,
  RangeSliderTrack,
} from "@chakra-ui/react";

import {
  FaCss3,
  FaDatabase,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPhp,
} from "react-icons/fa";
import {
  AiOutlineAndroid,
  AiOutlineDatabase,
  AiTwotoneDatabase,
} from "react-icons/ai";
import { GrDatabase, GrMysql, GrReactjs } from "react-icons/gr";
import { TriangleUpIcon } from "@chakra-ui/icons";

type skillsProps = {};
const Skills = () => {
  return (
    <Stack flexDir="column" gap="2rem" color="#f3f3f3">
      <Heading borderBottom="2px solid green" w="fit-content">
        My Skills
      </Heading>
      <Stack flexDir="column" gap="1">
        {skills.map((item, idx) => (
          <HStack key={idx} alignItems="center" rowGap="1rem" gap="1rem">
            <Text fontSize={30}>{item.icon}</Text>
            <Text width={220}>{item.name}</Text>

            <RangeSlider
              ringColor={"#fff"}
              value={[
                0,
                item.level === "professional"
                  ? 90
                  : item.level === "beginner"
                  ? 0
                  : 50,
              ]}
            >
            
              <RangeSliderTrack height={"2px"} />
              <RangeSliderThumb
                index={1}
                ringColor="0"
                border="1px solid rgaa(0, 255, 0, 0.2)"
                boxSize={"15px"}
              />
            </RangeSlider>
          </HStack>
        ))}
      </Stack>
    </Stack>
  );
};
export default Skills;
const skills = [
  {
    icon: <FaHtml5 />,
    level: "professional",
    name: "HTML5",
  },
  {
    icon: <FaCss3 />,
    level: "professional",
    name: "CSS3",
  },
  {
    icon: <FaJs />,
    level: "professional",
    name: "JavaScript",
  },
  {
    icon: <GrReactjs />,
    level: "professional",
    name: "ReactJs",
  },
  {
    icon: <TriangleUpIcon />,
    level: "intermediate",
    name: "Nextjs",
  },
  {
    icon: <FaPhp />,
    level: "beginner",
    name: "Php8",
  },
  {
    icon: <FaNodeJs />,
    level: "intermediate",
    name: "Nodejs",
  },
  {
    icon: <FaDatabase />,
    level: "intermediate",
    name: "MongoDB",
  },
  {
    icon: <GrMysql />,
    level: "intermediate",
    name: "MySQL",
  },
  {
    icon: <AiOutlineAndroid />,
    level: "intermediate",
    name: "React Native",
  },
];
