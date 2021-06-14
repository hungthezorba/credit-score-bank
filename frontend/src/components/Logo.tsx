import React from "react"
import { Box, Text } from "@chakra-ui/react"

type logo = {
  w?: string,
  h?: string
}

export default function Logo(props:logo) {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        Logo
      </Text>
    </Box>
  )
}
