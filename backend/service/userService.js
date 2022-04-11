const { user } = require('pg/lib/defaults')
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
    } // verifica se os valores estao em conformidade (1) se estiver envia para o Dao cadastrar no banco


    return resultCheckUser
}

const addSkill = async (cd_user, cd_skill) => {
    const nm_skill = Array.isArray(cd_skill) ? cd_skill : [cd_skill]

    const skills = nm_skill.join(",")

    return userDao.addSkill(cd_user, skills)
}


const getUser = (cd_id) =>{

    return userDao.getUser(cd_id)
}

const query = (query) =>{

    return userDao.queryUsers(query)
}


module.exports = { create, addSkill, getUser, query };