// cadastrar usuario validacao verificado de duplicidade
const { user } = require('pg/lib/defaults')
const userDao = require('../dao/userDao')

// Tamanho do nome, duplicidade do email, tamanho da descricao, tamanho da senha

const checkUser = (usuario) =>{
    if (usuario.nm_name.length < 3) {
        return { id:0, codigo: "Nome inválido."}
    } else if (usuario.cd_password < 8) {
        return { id:0, codigo: "Senha pequena."}
    } else {
        console.log(`Passou`)
        return { id:1, codigo: "Usuário cadastrado."}
    }

}

const create = (usuario) => {
    const resultCheckUser = checkUser(usuario)
    console.log("Result",resultCheckUser)

    if (resultCheckUser.id) {
        console.log(resultCheckUser.id)
        userDao.cadastrar(usuario)
    }
    return resultCheckUser
}



module.exports = {create};