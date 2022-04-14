import React, { useEffect, useState } from 'react'
import { Flex, List, ListItem, Text, Link } from '@chakra-ui/react'
import ButtonSkill from '../../components/ButtonSkill/ButtonSkill'
import CardMentor from '../../components/Card/Mentor'
import poolOfSkills from '../../services/poolOfSkills.js'
import axios from 'axios'

const Mentorias = () => {
  const [mentors, setMentors] = useState([]);
  const [search, setSearch] = useState('');
  const [suggestionTech, setSuggestionTech] = useState([]);

  useEffect(() => {
    getDataMentors();
  }, [])

  useEffect(() => {
    getTechs();
  }, [search])

  async function getDataMentors() {
    const { data } = await axios.get('https://fshared-backend.herokuapp.com/users')
    setMentors(data)
    return(data)
  }

  function getTechs() {
    const results = poolOfSkills.filter(skill => skill.toLowerCase().indexOf(search) !== -1);
    if (results.length > 0) {
      setSuggestionTech(results)
    } else {
      setSuggestionTech(["Nenhum resultado encontrado"])
    }
  }

  async function getMentorsWithSkill(tech) {
    const { data } = await axios.get(`https://fshared-backend.herokuapp.com/query/${tech}`)
    setMentors(data)
    setSearch("")
  }

  return (
    <Flex
      minHeight="100vh"
      direction="column"
      maxWidth={1480}
      align="center"
      mx="auto"
      p="45"
      bg="white"
    >
      {/* Header */}
      <Flex align="center" justify="space-between" direction="row" w="100%">
        <Text
          as="strong"
          fontSize="4xl"
          color="#FE4400"
          css={{ "lineHeight": "40px" }}
        >
          Buscar mentor
        </Text>
        <Link href="/" _hover={{ color: "#FE4400" }}>
          <Flex>
            <Text as="span" >Logout</Text>
            <img className='icon-logout' src='dist/img/logout.png' alt="Icone de saída" />
          </Flex>
        </Link>
      </Flex>

      {/* Seacrh bar */}
      <Flex my="5" direction="column" w="100%">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar Habilidade"
            aria-label="Buscar Habilidade"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="submit"
              onClick={() => getMentorsWithSkill("ReactJs")}
            >
              <i className="fas fa-search fa-fw" />
            </button>
          </div>
        </div>

        {search ?
          <Flex
            direction="row"
            borderRadius={3}
            p={1}
            mt={10}
            w="100%"
            maxWidth={1342}
            align="flexStart"
            css={{
              "z-index": "10",
              "position": "fixed",
              "backgroundColor": "rgba(0, 0, 0, 0.18)"
            }}>
            <List spacing={1}>
              {suggestionTech.map((tech, index) => {
                return (
                  <ListItem key={index}>
                    <Text
                      as="strong"
                      m={0}
                      p={1}
                      _hover={{
                        color: "#FE4400",
                        cursor: "pointer"
                      }}
                      onClick={() => getMentorsWithSkill(tech)}
                    >
                      {tech}
                    </Text>
                  </ListItem>
                )
              })}
            </List>
          </Flex>
          :
          <></>
        }

      </Flex>

      {/* Stacks */}
      <Flex align="center" justify="center" flexWrap="wrap">
        <ButtonSkill
          value="NodeJs"
          handleFunction={getMentorsWithSkill}
        />
        <ButtonSkill
          value="ReactJs"
          handleFunction={getMentorsWithSkill}
        />
        <ButtonSkill
          value="MySQL"
          handleFunction={getMentorsWithSkill}
        />
        <ButtonSkill
          value="Laravel"
          handleFunction={getMentorsWithSkill}
        />
        <ButtonSkill
          value="Rust"
          handleFunction={getMentorsWithSkill}
        />
      </Flex>

      {/* Stacks Mentor Cards */}
      <Flex gap={1} align="center" justify="center" flexWrap="wrap">

        {mentors !== undefined ?
          mentors.map((mentor) => {
            return (
              <CardMentor
                key={mentor.cd_id}
                name={mentor.nm_name}
                id={mentor.cd_id}
                position={mentor.nm_role}
                pic={mentor.nm_pic}
                stack={mentor.nm_skills}
              />
            )
          })
          :
          <></>
        }

      </Flex>
    </Flex>
  )
}

export default Mentorias;