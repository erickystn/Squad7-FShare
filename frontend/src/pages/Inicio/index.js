import {
  Flex,
  Box,
  Text,
  Heading,
  VStack,
  Image,
  Button,
  Link,
  useBreakpointValue
} from '@chakra-ui/react'
import React from 'react'
import logo from '../../assets/img/logoShare.png';
import img1 from '../../assets/img/ImgScreenInitial.png';

const Inicio = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Flex direction="column" h="100vh">
      <Flex
        w="100%"
        height="100%"
        minHeight="100vh"
        maxWidth={1480}
        direction="column"
        justify="space-between"
        mx="auto"
        p="45"
        bg="#FE4400"
        css={{
          "position": "relative"
        }}
      >

        <Flex
          direction={{ base: 'column', lg: 'row' }}
          w="100%"
          justify={{ base: "center", lg: "flex-end" }}
          css={{
            "position": "relative"
          }}
        >
          {isWideVersion ?
            <>
              <Box
                bg='#ffff'
                w={600}
                h={600}
                borderRadius='50%'
                css={{
                  "position": "absolute",
                  "top": "-190px",
                  "left": "-190px",
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

              <Box>
                <Heading as="h1" size="3xl" align="right" color='#ffff'>Bem-vindo,</Heading>
                <Heading as="h1" size="3xl" align="right" color='#ffff'>Sangue Laranja!</Heading>
              </Box>
            </>
            :
            <Box
              bg='#ffff'
              w={430}
              h={430}
              align="center"
              borderRadius='50%'
              css={{
                "position": "absolute",
                "top": "-190px",
                "left": "-100px",
                "z-index": 1
              }}>

              <Image
                src={logo}
                w='60%'
                mt={52}
                ml={10}
              />
            </Box>
          }
        </Flex>

        <Image
          css={{
            "position": "absolute",
            "bottom": "0",
            "right": "0",
            "z-index": 1
          }}
          marginLeft="auto"
          minHeight="350px"
          minWidth="335px"
          src={img1}
          w='40%'
        />

        <VStack align="center" mb={{ base: "80", lg: "24" }} css={{ "z-index": "1" }}>
          <Link href="/cadastrar">
            <Button
              type="button"
              bg="#A8A8D0"
              color="#000000"
              size="lg"
              height='48px'
              width={{ base: '300px', lg: '380px' }}
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

      </Flex>
    </Flex>
  );
}

export default Inicio;