import React, { useState, useContext } from "react";
import { Flex, Spacer, Box, Button, Heading, Image, Center } from "@chakra-ui/react";
import NavigationStack from "./NavigationStack";
import MenuToggle from "./MenuToggle";
import Logo from '../assets/img/logo.png';
import AppContext from '../store/AppContext'

const NavBarContainer: React.FC = ({ children }) => {
  return (
    <Flex
      // id="header"
      className="fixed-top"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      px={20}
      py={5}
      style={{ backgroundColor: 'white', color: 'black', borderBottomColor: '#ccc', borderBottomWidth: 1 }}
    >
      {children}
    </Flex>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)


  return (
    <NavBarContainer>
      <Flex>
        <Image height="40px" width="40px" src={Logo} alt="Dan Abramov" />
        <Center >
          <p style={{
            fontSize: "25px",
            marginLeft: "10px",
            fontStyle: "italic",
            fontWeight: "bold",
            color: "#196b69"
          }}>WiseLender</p>
        </Center>
      </Flex>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <NavigationStack isOpen={isOpen} />
    </NavBarContainer>
  );
};

export default Navbar;
