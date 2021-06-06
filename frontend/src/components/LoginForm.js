import React, {useState} from "react";
import {
  Center,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Box,
  Stack
} from "@chakra-ui/react";

const LoginForm = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


  return (
    <Box minW={['100%','35%']} w={['100%','35%']} px={12} py={40} borderRadius={20} boxShadow="base">
        <Stack spacing="24px">
            <Box>
            <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input type="username" onChange={(e) => setUsername(e.value)} value={username}  />
            </FormControl>
        </Box>
        <Box>
            <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" onChange={(e) => setPassword(e.value)} value={password} />
            </FormControl>
        </Box>
        <Center w={'100%'}>
                <Button w={['100%', '50%']}>
                    Login  
                </Button>
        </Center>
        </Stack>
        </Box>

     
  );
};

export default LoginForm