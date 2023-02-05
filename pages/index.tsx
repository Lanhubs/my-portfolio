import { Box } from "@chakra-ui/react";
import Details from "../Components/HomeComponents";
import Wrapper from "../Components/Templates/Wrapper/Wrapper";
import dynamic from "next/dynamic";
// home screen
/* const Wrapper = dynamic(
  () => import("../Components/Templates/Wrapper/Wrapper"),
  { ssr: false }
); */

export default function Home() {
  return (
    <Wrapper>
      <Box w="100%" height="100%" width="100%" minWidth="100%">
        <Details />
      </Box>
    </Wrapper>
  );
}
