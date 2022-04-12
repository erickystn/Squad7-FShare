import { Button, Flex, Image, Link, Text } from '@chakra-ui/react'

const CardMentor = ({ name, stack, id, pic = false, position }) => {
  return (
    <Flex
      justify="space-between"
      width="100%"
      maxWidth="495px"
      borderRadius="8"
      my="2"
      css={{ "border": "1px solid black" }}
    >

      <Flex bg="#fff" px={3} borderRadius="8" align="center">
        <Image
          src={pic ? pic : "https://github.com/erickystn.png"}
          alt="Imagem de perfil"
          height={{ base: "100", md: "150" }}
          widht={{ base: "50", md: "100" }}
          borderRadius="50%"
        />
        <Flex direction="column" m={3}>
          <Text as="strong" fontSize='2xl' css={{ "lineHeight": "25px" }}>
            {name}
          </Text>
          <Text as="p" fontSize='sm'>{position}</Text>
          <Link href={`/${id}`} my={2}>
            <Button
              type="button"
              bg="#5251A2"
              color="#fff"
              size="md"
              width="80%"
              _hover={{ color: '#000' }}
              css={{ 'boxShadow': '2px 2px 5px #615D5D' }}
            >
              Ver Perfil
            </Button>
          </Link>
        </Flex>
      </Flex>

      <Flex
        direction="column"
        justify="center"
        bg="#5251A2"
        p={3}
        css={{ "borderRadius": "0 7px 7px 0" }}
      >
        {stack.map((tech, index) => {
          return (
            <Flex
              key={index}
              bg="white"
              align="center"
              justify="center"
              w="100px"
              my={2}
              mx={{ base: 1, md: 2 }}
              p={2}
              borderRadius={10}
            >
              {tech}
            </Flex>
          )
          })
        }
      </Flex>

    </Flex>
  )
}

export default CardMentor;