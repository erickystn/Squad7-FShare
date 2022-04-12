import React, { useEffect, useState } from 'react'
import { Box, Button, Flex, List, ListItem, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
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

  function handleSelectSkill(value) {
    //alert(value)
    return
  }

  return (
    <div>

      <section class="content padding-header">

        <div>
          {/* Header */}
          <div className='row justify-content-between'>
            <h2>Buscar mentor</h2>
            <Link to="/">
              <div className='box-logout'>
                <span className='text-logout'>Logout</span>
                <img className='icon-logout' src='dist/img/logout.png' alt="Icone de saída" />
              </div>
            </Link>
          </div>
          {/* Fim Header */}

          {/* Seacrh bar */}
          <div class="row search-bar">
            <div class="col-12 col-sm-12 col-md-12 d-flex align-items-stretch flex-column">

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

            </div>
          </div>

          {/* Stacks */}
          <Flex align="center" justify="center" flexWrap="wrap">
            <ButtonSkill
              value="NodeJs"
              handleFunction={handleSelectSkill}
            />
            <ButtonSkill
              value="React"
              handleFunction={handleSelectSkill}
            />
            <ButtonSkill
              value="MySQL"
              handleFunction={handleSelectSkill}
            />
            <ButtonSkill
              value="C#"
              handleFunction={handleSelectSkill}
            />
            <ButtonSkill
              value="Javascript"
              handleFunction={handleSelectSkill}
            />
          </Flex>

          {/* Stacks Mentor Cards */}
          <div className='row justify-content-between'>
            {mentors.map((mentor) => {
              return (
                <CardMentor
                  key={mentor.id}
                  name={mentor.name}
                  id={mentor.id}
                  position={mentor.postion}
                  stack={mentor.stack}
                />
              )
            })}
          </div>

        </div>

      </section >
    </div >
  )
}

export default Mentorias;