
import { Text, Link, Stack, Box } from "@chakra-ui/react";
import { useContext } from 'react'
import AppContext from '../store/AppContext'

interface NavigationItemProps {
  to: string
}

const NavigationItem:React.FC<NavigationItemProps> = ({ children, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

interface NavigationStackProps {
  isOpen: boolean
}

const NavigationStack:React.FC<NavigationStackProps> = ({isOpen}) => {

  const state = useContext(AppContext)


  return (
    <Box
    display={{ base: isOpen ? "block" : "none", md: "block" }}
    flexBasis={{ base: "100%", md: "auto" }}>
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <NavigationItem to="/">Login</NavigationItem>
        <NavigationItem to="/how">About us</NavigationItem>
      </Stack>
    </Box>
  );
};


export default NavigationStack