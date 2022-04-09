import { Flex, Box, Text, Heading, VStack, Image, Button } from '@chakra-ui/react'
import React from 'react'
import iconWave from '../../assets/img/iconWave.png';

const SelecionarSkill = () => {
  return (
    <Flex direction="column" h="100vh">
      <Flex
        h="100vh"
        direction="column"
        maxWidth={1480}
        justify="space-between"
        align="center"
        mx="auto"
        p="45"
        bg="#f1f2f5"
      >
        <Flex direction="row" justify="space-between" align="center" w="100%">
          <Image
            src={iconWave}
            w="200"
            h="100"
          />
          <Heading
            as="h1"
            size="lg"
            color='#FE4400'
          >
            Selecione as habilidades que você mais domina!
          </Heading>
        </Flex>

        <Flex direction="row" justify="center" align="center" maxWidth={1480} my={10} flexWrap="wrap">
          <Button
            m={5}
            type="button"
            bg="#ffff"
            color="#000000"
            size="md"
            width="180px"
            _hover={{ bg: '#FE4400', color: '#ffff' }}
            css={{ 'boxShadow': '3px 3px 7px #615D5D' }}
          >
            RubyOnRails
          </Button>
        </Flex>

        <VStack width="100%" justify="space-between">
          <Button
            type="button"
            bg="#FE4400"
            color="#000000"
            size="lg"
            _hover={{ bg: '#B93200', color: '#ffff' }}
            css={{ 'boxShadow': '3px 3px 7px #615D5D' }}

          >
            FINALIZAR CADASTRO!
          </Button>
          <Box>
            <Text as="strong" color="#36357E">Não quer adicionar suas habilidades? </Text>
            <Text
              as="a"
              color="#36357E"
              css={{ "cursor": "pointer" }}>
              Clique aqui
            </Text>
          </Box>
        </VStack>

      </Flex>
    </Flex>
  );
}

export default SelecionarSkill;