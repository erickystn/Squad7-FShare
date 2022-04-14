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
    getDataMentor(5);
  }, [])

  async function getDataMentor(id) {
    const { data } = await axios.get(`https://fshared-backend.herokuapp.com/user/${id}`);
    setDataMentor(data)
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
              src={dataMentor.nm_pic}
              w="280px"
              h="280px"
              borderRadius="full"
              css={{ "border": "2px solid white" }}
            />
            <Text as="strong" color="#36357E" fontSize="4xl" mx={4}>{dataMentor.nm_name}</Text>
          </Flex>

          <Flex direction="column" align="center">
            <Text color="#000" fontSize="lg" mx={2} align="center">{dataMentor.nm_role}</Text>
            <Flex direction="row" align="center" m="20px">

              <Flex direction="row" flexWrap="wrap" maxWidth="320px" align="center" justify="center">

                {dataMentor.nm_skills ?
                  dataMentor.nm_skills.map(((skill, index) => {
                    return (
                      <Text
                        key={index}
                        as="strong"
                        color="#000"
                        fontSize="lg"
                        mx={2}>
                        {skill}
                      </Text>
                    )
                  }))
                  :
                  <></>
                }
              </Flex>

            </Flex>
          </Flex>

        </Flex>
        
        <Flex direction="column" p={[2, 2, 10]} flex="1">
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
