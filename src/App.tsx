import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button,
  Stack
} from '@chakra-ui/react'
import { login } from './services/login';
import { Text } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
            <Stack spacing={3}>
              <Center>
              <Text as ='b' fontSize='3xl' color={'purple.600'}>Faça o login</Text>
              </Center>
              <Input placeholder="email" />
              <Input placeholder="password" />
            </Stack>
          <Center>
            <Button onClick={login}
             colorScheme='purple'
              size='sm' width='100%'
              marginY='15px'
              type='submit'>
              Logar
            </Button>
          </Center>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
