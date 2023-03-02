import {
  Box,
  Button,
  Flex,
  FormControl,
  GridItem,
  Input,
  InputGroup,
  InputLeftAddon,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineMail, AiOutlinePhone, AiOutlineUser } from "react-icons/ai";

const ContactMeForm = () => {
  const [firstName, setFirstName] = React.useState();
  return (
    <GridItem
      //  gridColumn={1}
      gridRowStart={1}
      gridRowEnd={3}
      padding="1rem"
      display="flex"
      flexDir="column"
      background="#fff"
      gap="1.5rem"
      justifyContent="center"
      rounded="lg"
    >
      <CusInput
        type="text"
        onChange={setFirstName}
        IconRight={<AiOutlineUser />}
        placeholder="First name"
      />
      <CusInput
        type="text"
        onChange={setFirstName}
        IconRight={<AiOutlineUser />}
        placeholder="last name"
      />
      <CusInput
        type="tell"
        onChange={setFirstName}
        IconRight={<AiOutlinePhone />}
        placeholder="phone"
      />
      <CusInput
        type=""
        onChange={setFirstName}
        IconRight={<AiOutlineMail />}
        placeholder="email"
      />
      <Textarea
        border="2px solid rgba(0, 0, 0, 0.5)"
        outline="0"
        zIndex={0}
        outlineColor={"0"}
        cols={10}
        rows={8}
      />
      <Button
        backgroundColor="green.700"
        height="50px"
        color="#f3f3f3"
        fontSize={18}
      >
        Send Newsletter
      </Button>
    </GridItem>
  );
};

export default ContactMeForm;
interface inputProps {
  name?: string;
  type?: string;
  IconRight?: React.ReactNode;
  onChange?: Function;
  placeholder?: string;
  iconName?: string;
  rest?: React.Attributes;

}
const CusInput = ({ name, type, onChange, IconRight, ...rest }:inputProps) => {
  return (
    <Flex
      alignItems="center"
      rounded="sm"
      borderRadius="md"
      border="2px solid rgba(0, 0, 0, 0.5)"
      overflow="hidden"
    >
      <Box
        as={"span"}
        padding="10px"
        fontSize={25}
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="#000"
      >
        {IconRight}
      </Box>
      <Input
        padding="10px 5px"
        outline="none"
        outlineOffset={0}
        border="0"
        _placeholder={{ textTransform: "capitalize" }}
        type={type}
        name={name}
        outlineColor="none"
        onChange={(e) => onChange}
        {...rest}
      />
    </Flex>
  );
};
