// user.create() consulta
const db = require("../db.js")
const user = require("../models/user.js")



const cadastrar = async (usuario) => {
    try {
         await db.sync();

         await user.create(usuario)
            .then(() => console.log('Cadastrou'))
            .catch((e) => console.log(e))

    } catch (error) {
        console.log(e)
    }
}







module.exports = { cadastrar }