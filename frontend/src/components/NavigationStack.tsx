import { Text, Stack, Box, Link } from "@chakra-ui/react";
import { useContext } from "react";
import AppContext from "../store/AppContext";
import { Link as RouterLink } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";

interface NavigationItemProps {
  to: string;
  children: string;
}

const LOGOUT = gql`
  mutation logout {
    logout
  }
`;

function NavigationItem({
  children,
  to = "/",
  ...rest
}: NavigationItemProps): JSX.Element {
  const globalState = useContext(AppContext);
  const [logout] = useMutation(LOGOUT);

  if (children == "Logout") {
    return (
      <Link as={RouterLink} to={to}>
        <Text
          onClick={async () => {
            globalState.setAuthenticated(false);
            window.localStorage.removeItem("user");
            logout();
          }}
          display="block"
          {...rest}
        >
          {children}
        </Text>
      </Link>
    );
  }

  return (
    <Link as={RouterLink} to={to}>
      {children}
    </Link>
  );
}

interface NavigationStackProps {
  isOpen: boolean;
}

const NavigationStack: React.FC<NavigationStackProps> = ({ isOpen }) => {
  const globalState = useContext(AppContext);
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <NavigationItem to="/home">Home</NavigationItem>
        <NavigationItem to="/about">About us</NavigationItem>
        <NavigationItem to="/customer-update">New Customer</NavigationItem>
        <NavigationItem to="/history">History</NavigationItem>
        {globalState.authenticated ? (
          <NavigationItem to="/">Logout</NavigationItem>
        ) : (
          <NavigationItem to="/">Login</NavigationItem>
        )}
      </Stack>
    </Box>
  );
};

export default NavigationStack;
