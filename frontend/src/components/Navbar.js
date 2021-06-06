import React, { useState } from "react";
import * as styles from './navbar.module.css'
import { Flex, Spacer, Box, Button, Heading } from "@chakra-ui/react";
import NavigationStack from "./NavigationStack";
import MenuToggle from "./MenuToggle";
import Logo from './Logo'

const NavBarContainer = ({ children, ...props }) => {
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={8}
        px={20}
        py={5}
        style={{backgroundColor: 'white', color: 'black', borderBottomColor: '#ccc', borderBottomWidth: 1}}
        {...props}
      >
        {children}
      </Flex>
    )
  }

const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

  return (
    <NavBarContainer {...props}>
        <Logo
        w="100px"
        />
        <MenuToggle toggle={toggle} isOpen={isOpen}/>
        <NavigationStack isOpen={isOpen}/>
    </NavBarContainer>
  );
};

export default Navbar;
