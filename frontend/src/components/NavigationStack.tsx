import { Text, Stack, Box, Link } from "@chakra-ui/react";
import { useContext } from 'react'
import AppContext, { } from '../store/AppContext'
import { Link as RouterLink } from 'react-router-dom'

interface NavigationItemProps {
  to: string,
  children: string
}

function NavigationItem({ children, to = '/', ...rest }: NavigationItemProps): JSX.Element {
  const globalState = useContext(AppContext)

  if (children == 'Logout') {
    return (
      <Link as={RouterLink} to={to}>
        <Text onClick={() => {
          globalState.setAuthenticated(false);
          localStorage.removeItem('user');
        }} display="block" {...rest}>
          {children}
        </Text>
      </Link>
    )
  }

  return (
    <Link as={RouterLink} to={to}>
      {children}
    </Link>
  );
};

interface NavigationStackProps {
  isOpen: boolean
}

const NavigationStack: React.FC<NavigationStackProps> = ({ isOpen }) => {

  const globalState = useContext(AppContext)

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
        {globalState.authenticated ?
          <NavigationItem to="/">Logout</NavigationItem>
          :
          <NavigationItem to="/">Login</NavigationItem>

        }
        <NavigationItem to="/about">About us</NavigationItem>
        <NavigationItem to="/history">History</NavigationItem>
      </Stack>
    </Box>
  );
};


export default NavigationStack