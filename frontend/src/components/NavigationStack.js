
import { Text, Link, Stack, Box } from "@chakra-ui/react";

const NavigationItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const NavigationStack = ({isOpen}) => {
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