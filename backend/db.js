//FAZENDO A CONEXÃO COM O BANCO

const Sequelize = require('sequelize') // importação

const banco = new Sequelize(process.env.KEY_DB, {
    dialect: 'postgres',
    dialectOptions: { ssl: {require: true, rejectUnauthorized: false}}
})

banco.authenticate().then(() => {
    console.log("Autenticado no Banco.")
}).catch((e) => {
    console.log("Erro.", e)
})

module.exports = banco // exportação