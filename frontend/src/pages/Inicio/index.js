import { Flex, Box, Text, Heading, VStack, Image, Button, Link } from '@chakra-ui/react'
import React from 'react'
import logo from '../../assets/img/logoShare.png';
import img1 from '../../assets/img/ImgScreenInitial.png';

const Inicio = () => {
  return (
    <Flex direction="column" h="100vh">
      <Flex
        w="100%"
        h="100vh"
        maxWidth={1480}
        justify="flex-end"
        align="space-between"
        mx="auto"
        p="45"
        bg="#FE4400"
        css={{
          "position": "relative"
        }}>
        <Box
          bg='#ffff'
          w={600}
          h={600}
          borderRadius='50%'
          align='flex-end'
          justify='flex-end'
          css={{
            "position": "absolute",
            "top": "-20%",
            "left": "-8%",
            "z-index": 1
          }}>
          <Image
            src={logo}
            w='55%'
            mt={64}
            ml={48}
            css={{
            }}
          />
        </Box>

        <VStack align="flex-end" justify="space-between" css={{ "z-index": 10 }}>
          <Box>
            <Heading as="h1" size="3xl" align="right" color='#ffff'>Bem-vindo,</Heading>
            <Heading as="h1" size="3xl" align="right" color='#ffff'>@sangueLaranja!</Heading>
          </Box>
          <Flex align='center' justify='center'>
            <VStack width="100%" mr="10">
              <Link href="/cadastrar">
                <Button
                  type="button"
                  bg="#A8A8D0"
                  color="#000000"
                  size="lg"
                  height='48px'
                  width='400px'
                  _hover={{ bg: '#36357E', color: '#ffff' }}
                  css={{ 'boxShadow': '3px 3px 7px #615D5D' }}
                >
                  Comece aqui!
                </Button>
              </Link>
              <Box>
                <Text as="strong" color="#ffff">Já tem uma conta? </Text>
                <Text
                  as="a"
                  href="/cadastrar"
                  color="#ffff"
                  css={{ "cursor": "pointer" }}>
                  Clique aqui
                </Text>
              </Box>
            </VStack>
            <Image
              src={img1}
              w='100%'
              css={{
              }}
            />

          </Flex>
        </VStack>
      </Flex>
    </Flex>
  );
}

export default Inicio;