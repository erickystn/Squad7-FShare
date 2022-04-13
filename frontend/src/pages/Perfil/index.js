import React, { useEffect, useState } from 'react';
import { Flex, Button, Text, Image } from '@chakra-ui/react'
import { CalendlyFunctional } from '../../components/Calendly/Calendly'
import axios from 'axios'

const Perfil = () => {
  const [dataMentor, setDataMentor] = useState({})
  
  useEffect(() => {
    setDataMentor(getDataMentor());
  }, [])

  async function getDataMentor() {
    await axios.get('https:localhost:8080/getMentor')
  }

  return (
    <Flex maxWidth={1480} w="100%" bg="#FE4400" align="center" justify="center">
      <Flex direction="column" bg="green" p={10} h="100vh" align="space-between" justify="flex-start">
        <Flex direction="column" align="center">
          <Image
            src="https://github.com/NaySoares.png"
            w="300px"
            h="300px"
            borderRadius="full"
            css={{"border": "2px solid white"}}
          />
          <Text as="strong" color="#36357E" fontSize="4xl" mx={4}>Elienai Soares</Text>
        </Flex>

        <Flex direction="column" align="center">
          <Text color="#000" fontSize="lg" mx={2} align="center">Dev Senior</Text>
          <Flex direction="row" align="center" m="20px">
            <Text color="#000" fontSize="lg" mx={2}>React</Text>
            <Text color="#000" fontSize="lg" mx={2}>Nodejs</Text>
            <Text color="#000" fontSize="lg" mx={2}>RubyOnRails</Text>
          </Flex>
        </Flex>

      </Flex>
      <Flex direction="column" bg="white" flex="1">
        
        <CalendlyFunctional 
          minWidth="320px"
          height="580px"
          url="elienaisoares"
        />

        <Button
          size="lg"
          w="320px"
          p={6}
          bg="#6263AB"
          color="white"
          _hover={{ bg: "#36357E", color: "black" }}
        >
          <Text fontSize="lg">Buscar novo mentor</Text>
        </Button>
      </Flex>
    </Flex>
  )
}

export default Perfil;
