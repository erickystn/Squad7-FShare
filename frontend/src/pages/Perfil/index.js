import React, { useEffect, useState } from 'react';
import { Flex, Button, Text, Image, Link, useBreakpointValue } from '@chakra-ui/react'
import { CalendlyFunctional } from '../../components/Calendly/Calendly'
import axios from 'axios'

const Perfil = () => {
  const [dataMentor, setDataMentor] = useState({})

  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true
  });

  useEffect(() => {
    setDataMentor(getDataMentor());
  }, [])

  async function getDataMentor() {
    await axios.get('https:localhost:8080/getMentor')
  }

  return (
    <Flex minHeight="100vh" bg="white">
      <Flex
        direction={{ base: "column", md: "row" }}
        maxWidth={1480}
        w="100%"
        justify="space-between"
        align="center"
        mx="auto"
        bg="#FE4400"
      >
        <Flex direction="column" p={10} h="100%" justify="center" align="space-between" >
          <Flex direction="column" align="center">
            <Image
              src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=440&q=80"
              w="280px"
              h="280px"
              borderRadius="full"
              css={{ "border": "2px solid white" }}
            />
            <Text as="strong" color="#36357E" fontSize="4xl" mx={4}>Elienai Soares</Text>
          </Flex>

          <Flex direction="column" align="center">
            <Text color="#000" fontSize="lg" mx={2} align="center">Dev Senior</Text>
            <Flex direction="row" align="center" m="20px">
              <Text as="strong" color="#000" fontSize="lg" mx={2}>React</Text>
              <Text as="strong" color="#000" fontSize="lg" mx={2}>Nodejs</Text>
              <Text as="strong" color="#000" fontSize="lg" mx={2}>RubyOnRails</Text>
            </Flex>
          </Flex>

        </Flex>

        <Flex direction="column" p={[2, 2, 10]}  flex="1">
          <Link href="/mentorias" ml="auto" mr="auto">
            <Button
              size="lg"
              w="320px"
              p={6}
              bg="#6263AB"
              color="white"

              _hover={{ bg: "#36357E" }}
            >
              <Text fontSize="lg">Buscar novo mentor</Text>
            </Button>
          </Link>
          <CalendlyFunctional
            minWidth="320px"
            height={isWideVersion ? "700px" : "400px"}
            url="elienaisoares"
          />

        </Flex>
      </Flex>
    </Flex>
  )
}

export default Perfil;
