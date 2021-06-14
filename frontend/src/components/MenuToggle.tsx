import React from "react"
import { Box } from "@chakra-ui/react"
import {CloseIcon, HamburgerIcon } from '@chakra-ui/icons'

interface MenuToggleProps {
  toggle: () => void,
  isOpen: boolean
}

const MenuToggle:React.FC<MenuToggleProps> = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  )
}

export default MenuToggle