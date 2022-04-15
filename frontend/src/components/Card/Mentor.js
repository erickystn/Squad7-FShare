import { Button, Flex, Image, Link, Text, useBreakpointValue } from '@chakra-ui/react'
import imgDefault from '../../assets/img/avatarDefault.jpg'

const CardMentor = ({ name, stack, id, pic = false, position }) => {

  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true
  });

  let stackPrincipal = [];
  if(stack.length > 3){
    for(let i = 0; i < 3; i++){
      stackPrincipal.push(stack[i])
    }
  } else {
    stackPrincipal = stack
  }
  return (
    <Flex
      justify="space-between"
      width="100%"
      maxWidth="495px"
      borderRadius="8"
      m="2"
      css={{ "border": "1px solid black" }}
    >

      <Flex bg="#fff" px={3} borderRadius="8" align="center">
        <Image
          
          src={pic ? pic : imgDefault}
          alt="Imagem de perfil"
          height={{ base: "70", sm: "150" }}
          widht={{ base: "50", sm: "100" }}
          borderRadius="50%"
        />
        <Flex direction="column" m={3}>
          <Text as="strong" fontSize='2xl' css={{ "lineHeight": "25px" }}>
            {name}
          </Text>
          <Text as="p" fontSize='sm'>{position}</Text>
          <Link href={`/perfil/${id}`} my={2}>
            <Button
              type="button"
              bg="#5251A2"
              color="#fff"
              size="md"
              width={{base: "100px", sm: "80%"}}
              _hover={{ color: '#000' }}
              css={{ 'boxShadow': '2px 2px 5px #615D5D' }}
            >
              Ver Perfil
            </Button>
          </Link>
        </Flex>
      </Flex>

      {isWideVersion ?
        <Flex
          direction="column"
          justify="center"
          bg="#5251A2"
          p={3}
          css={{ "borderRadius": "0 7px 7px 0" }}
        >
          {stackPrincipal.map((tech, index) => {
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
        :
        <></>
      }
    </Flex>
  )
}

export default CardMentor;