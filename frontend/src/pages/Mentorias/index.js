import React, { useEffect, useState } from 'react'
import { Flex, List, ListItem, Text, Link } from '@chakra-ui/react'
import ButtonSkill from '../../components/ButtonSkill/ButtonSkill'
import CardMentor from '../../components/Card/Mentor'
import { getMentor } from '../../services/skillServices'
import poolOfSkills from '../../services/poolOfSkills.js'
import "./style.css"

const Mentorias = () => {
  const [mentors, setMentors] = useState([]);
  const [search, setSearch] = useState('');
  const [suggestionTech, setSuggestionTech] = useState([]);

  useEffect(() => {
    setMentors(getMentor());
  }, [])

  useEffect(() => {
    getTechs();
  }, [search])

  function getTechs() {
    const results = poolOfSkills.filter(skill => skill.toLowerCase().indexOf(search) !== -1);
    if (results.length > 0) {
      setSuggestionTech(results)
    } else {
      setSuggestionTech(["Nenhum resultado encontrado"])
    }
  }

  function handleSearchMentorForStack(tech) {
    const arrMentors = getMentor()
    const mentorWithTech = arrMentors.filter(mentor => mentor.stack.includes(tech))

    if (mentorWithTech.length > 0) {
      setMentors(mentorWithTech)
    } else {
      setSearch("")
    }
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
            <text as="span" >Logout</text>
            <img className='icon-logout' src='dist/img/logout.png' alt="Icone de saída" />
          </Flex>
        </Link>
      </Flex>

      {/* Seacrh bar */}
      <Flex my="5" direction="column" w="100%">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Buscar Habilidade"
            aria-label="Buscar Habilidade"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="submit"
              onClick={(e) => handleSearchMentorForStack(e)}
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
            maxWidth={1180}
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
                      onClick={() => handleSearchMentorForStack(tech)}
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
          handleFunction={handleSearchMentorForStack}
        />
        <ButtonSkill
          value="ReactJs"
          handleFunction={handleSearchMentorForStack}
        />
        <ButtonSkill
          value="MySQL"
          handleFunction={handleSearchMentorForStack}
        />
        <ButtonSkill
          value="C#"
          handleFunction={handleSearchMentorForStack}
        />
        <ButtonSkill
          value="Javascript"
          handleFunction={handleSearchMentorForStack}
        />
      </Flex>

      {/* Stacks Mentor Cards */}
      <Flex gap={1} align="center" justify="center" flexWrap="wrap">
        {mentors.map((mentor) => {
          return (
            <CardMentor
              key={mentor.id}
              name={mentor.name}
              id={mentor.id}
              position={mentor.position}
              stack={mentor.stack}
            />
          )
        })}
      </Flex>
    </Flex>
  )
}

export default Mentorias;