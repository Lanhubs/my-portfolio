import {
  FormControl,
  GridItem,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";

const ContactMeForm = () => {
  return (
    <GridItem
      gridRow={1/2}
      gridColumn={2/3}
      padding="1rem"
      display="flex"
      flexDir="column"
      background="#fff" gap="10px"
    >
      <CusInput type="text" IconRight={ <AiOutlineUser />} placeholder="First name" />
      <CusInput type="text" IconRight={ <AiOutlineUser />} placeholder="last name" />

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
}
const CusInput = ({ name, type, IconRight,...rest }: inputProps) => {
  return (
    <FormControl padding="10px">

    <InputGroup width="90%" background="#fff">
      <InputLeftAddon color="#000" >
       {IconRight}
      </InputLeftAddon>
      <Input type={type} name={name} {...rest} />
    </InputGroup>
    </FormControl>
  );
};
