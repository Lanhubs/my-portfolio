import React from 'react'
import {Box, Flex} from "@chakra-ui/react"
import Wrapper from '../../Components/Templates/Wrapper/Wrapper'
import Skills from './Skills'
import Experiences from './Experiences'
import OtherThings from './OtherThings'
type Props = {}

const index = (props: Props) => {
  return (
    <Wrapper >
      <Box padding="7%">
        <Flex gap="10%">
          <Skills />
          <Experiences/>
          <OtherThings/>
        </Flex>
      </Box>
    </Wrapper>
  )
}

export default index