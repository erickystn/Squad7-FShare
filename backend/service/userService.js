const userDao = require('../dao/userDao')

// Cadastro de usuário, validações, verificação de duplicidade
const checkUser = async (usuario) =>{
    const resultCheckEmail = await userDao.checkEmail(usuario)

    if (usuario.nm_name.length < 3) {
      return { id:0, codigo: "Nome inválido."}
    } else if (usuario.cd_password < 8) {
      return { id:0, codigo: "Senha pequena."}
    } else if (resultCheckEmail != null) {
      return { id:0, codigo: "E-mail já cadastrado."}
    } else {
      return { id:1, codigo: "Usuário cadastrado."}
    }
}

const create = async (usuario) => {
    const resultCheckUser = await checkUser(usuario)
    console.log(resultCheckUser)
    if (resultCheckUser.id) { 
        resultCheckUser.cd_id = await userDao.cadastrar(usuario)
    }

    return resultCheckUser
}

const hasUser = async(cd_id) => {

    const resultHasUser = await userDao.hasUser(cd_id)
    if(resultHasUser == null) {
        return false
    } else {
        return true
    }
}

const addSkill = async (cd_id, cd_skill) => {
    const nm_skill = Array.isArray(cd_skill) ? cd_skill : [cd_skill]

    const skills = nm_skill.join(",")

    if(await hasUser(cd_id)){
        return userDao.addSkill(cd_id, skills)
    } else {
        return false 
    }
}

const getUser = (cd_id) => {

    return userDao.getUser(cd_id)
}

const allUser = async () => {
    const result = await userDao.allUser()
    result.forEach(user => {
        user.nm_skills = user.nm_skills ? user.nm_skills.split(",") : null
    })

    return result
}

const query = async (query) =>{

    const result = await userDao.queryUsers(query)
    result.forEach(user => {
        user.nm_skills = user.nm_skills ? user.nm_skills.split(",") : null
    })
    return result
}


module.exports = { create, addSkill, getUser, allUser, query };