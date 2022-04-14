import {
  Flex,
  Box,
  Text,
  Heading,
  VStack,
  Image,
  Button,
  useBreakpointValue,
  Link
} from '@chakra-ui/react'
import { useState } from 'react'
import { Redirect } from 'react-router-dom';
import axios from 'axios'
import iconWave from '../../assets/img/iconWave.png';
import ButtonSkill from '../../components/ButtonSkill/ButtonSkill';
import poolOfSkills from '../../services/poolOfSkills.js'

const SelecionarSkill = () => {
  const [skillsSelected, setSkillsSelected] = useState([]);
  const [newRender, setNewRender] = useState(false);

  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true,
  });

  const handleAddOrRemoveSkill = (value) => {
    const skillList = skillsSelected;

    if (skillList.includes(value)) {
      skillList.splice(skillList.indexOf(value), 1);
      setSkillsSelected(skillList)
    } else {
      skillList.push(value);
      setSkillsSelected(skillList)
    }
    setNewRender(!newRender)
  }

  async function handleSubmitSkills() {
    const data = {
      cd_id: 999,
      nm_skills: skillsSelected
    }

    const { response } = await axios.post(`https:localhost:8080/skill`, data)
    console.log(response)

    if (response.status === 200) {
      return <Redirect to="/perfil" />
    } else {
      console.log(response)
    }
  }

  return (
    <Flex direction="column" minHeight="100vh" bg="white">
      <Flex
        minHeight="100vh"
        direction="column"
        maxWidth={1480}
        justify="space-between"
        align="center"
        mx="auto"
        p="45"
        bg="#f1f2f5"
      >
        <Flex direction="row" justify={["center", "space-between"]} align="center" w="100%">
          {isWideVersion ?
            <Image
              src={iconWave}
              w="200"
              h="100"
              alt="Homem vetorizado selecionando cards"
            />
            :
            <></>
          }
          <Heading
            as="h1"
            size={isWideVersion ? "xl" : "lg"}
            color='#FE4400'
            align={isWideVersion ? "right" : "center"}
          >
            Gostaria de ser mentor? Selecione as habilidades que você mais domina!
          </Heading>
        </Flex>

        <Flex direction="row" justify="center" align="center" maxWidth={1480} my={10} flexWrap="wrap">
          {poolOfSkills.map((skill, index) => {
            return (
              <Box key={index}>
                {skillsSelected.includes(skill) ?
                  <ButtonSkill
                    key={index}
                    value={skill}
                    handleFunction={handleAddOrRemoveSkill}
                    isActive={true}
                  />
                  :
                  <ButtonSkill
                    key={index}
                    value={skill}
                    handleFunction={handleAddOrRemoveSkill}
                    isActive={false}
                  />
                }

              </Box>
            )
          })}

        </Flex>

        <VStack width="100%" justify="space-between">
          <Button
            type="button"
            bg="#FE4400"
            color="#000000"
            size="lg"
            _hover={{ bg: '#B93200', color: '#ffff' }}
            css={{ 'boxShadow': '3px 3px 7px #615D5D' }}
            onClick={() => handleSubmitSkills()}

          >
            Finalizar Cadastro!
          </Button>
          <Box align="center">
            <Text as="strong" color="#36357E">Não quer mentorar? </Text>
            <Link href="/mentorias">
              <Text
                as="a"
                color="#36357E"
              >
                Clique aqui
              </Text>
            </Link>
          </Box>
        </VStack>

      </Flex>
    </Flex>
  );
}

export default SelecionarSkill;