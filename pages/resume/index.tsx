import React from 'react'
import {Box, Flex} from "@chakra-ui/react"
import Wrapper from '../../Components/Templates/Wrapper/Wrapper'
import Skills from './Skills'
type Props = {}

const index = (props: Props) => {
  return (
    <Wrapper >
      <Box padding="7%">
        <Flex>
          <Skills />
        </Flex>
      </Box>
    </Wrapper>
  )
}

export default index