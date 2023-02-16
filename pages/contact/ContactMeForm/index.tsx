import {
  Box,
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
    const [state, setState] = React.useState()
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
        onChange={setState}
        IconRight={<AiOutlineUser />}
        placeholder="First name"
      />
      <CusInput
        type="text"
        onChange={setState}
        IconRight={<AiOutlineUser />}
        placeholder="last name"
      />
      <CusInput
        type="tell"
        onChange={setState}
        IconRight={<AiOutlinePhone />}
        placeholder="phone"
      />
      <CusInput
        type=""
        onChange={setState}
        IconRight={<AiOutlineMail />}
        placeholder="email"
      />
      <Textarea cols={10} rows={8}/>
    </GridItem>
  );
};

export default ContactMeForm;
interface inputProps {
  name: string;
  type: string;
  IconRight: React.ReactNode;
  onChange: Function;
  placeholder: string;
  iconName: string;
  rest: React.Attributes
}
const CusInput = ({ name, type, onChange, IconRight, ...rest }: inputProps) => {
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
        _placeholder={{textTransform: "capitalize"}}
        type={type}
        name={name}
        outlineColor="none"
        onChange={(e) => onChange(e.target.value)}
        {...rest}
      />
    </Flex>
  );
};
