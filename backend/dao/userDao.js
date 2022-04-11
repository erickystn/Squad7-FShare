const {Op, Sequelize} = require('sequelize')
const db = require("../db.js")
const User = require("../models/User.js")



const cadastrar = async (usuario) => {
    try {

        await db.sync(); // sincroniza com o banco de dados

        const result = await User.create(usuario).catch((e) => console.log(e)) //  faz a criacao na tabela User
        return JSON.parse(JSON.stringify(result)).cd_id // converte o resultado do sequilize em JSON, depois converte em objeto, enviando somente o id do usuario

    } catch (error) {
        console.log(error)
    }
}

const checkUser = async (id) => {

    try {

        await db.sync();

        const user = await User.findByPk(123);
        if (user === null) {
            console.log('Nao encontrado');
            return false;
        } else {
            console.log(user instanceof User);
            return true

        }






    } catch (erro) {
        console.log(erro)
    }

}


const addSkill = async (cd_user, skills) => {

    await db.sync();
    const user = await User.findByPk(cd_user)

    user.nm_skills = skills;
    return await user.save().then(() => 'Adicionado com sucesso').catch((e) => `Erro ao Adicionar:  ${e}`)

}

const getUser = async (cd_id) => {

    await db.sync();
    const result = await User.findByPk(cd_id)
    const user = {}
    user.cd_id = result.cd_id;
    user.nm_pic = result.nm_pic? result.cd_id : "No Photo";
    user.nm_name = result.nm_name;
    user.nm_description = result.nm_description;
    user.nm_role = result.nm_role;
    user.nm_url = result.nm_url ? result.nm_url : "No URL";
    user.nm_skills = result.nm_skills.split(",");
    console.log(user)

    return user


}

const queryUsers = async (query)=>{
    await db.sync();

    const result = await User.findAll({
        attributes: ["cd_id","nm_pic","nm_name","nm_skills"],
        where: {
            nm_skills: {
            [Op.like]: Sequelize.literal(`'%${query}%'`)
          }
        }
      })

      return JSON.parse(JSON.stringify(result))
}






module.exports = { cadastrar, addSkill, getUser, queryUsers }
