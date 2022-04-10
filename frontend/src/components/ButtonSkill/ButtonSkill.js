import { Button } from '@chakra-ui/react'

const ButtonSkill = ({value, isActive, handleFunction}) => {
  return (
    <Button
      value={value}
      onClick={(e) => handleFunction(e.target.value)}
      m={5}
      type="button"
      bg={isActive ? "#FE4400" : '#FFF'}
      color="#000000"
      size="md"
      width="180px"
      _hover={{ bg: '#FE4400', color: '#ffff' }}
      css={{ 'boxShadow': '3px 3px 7px #615D5D' }}
      _focus="none"
    >
      {value}
    </Button>
  )
}

export default ButtonSkill;