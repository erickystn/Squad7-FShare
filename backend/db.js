//FAZENDO A CONEXÃO COM O BANCO

const Sequelize = require('sequelize') // importação

const banco = new Sequelize('postgres://pfobqzkevfubql:a649f37c23b4c22d4a98b1097d302e1047d4edb5ac23010c65b3872ba99bd011@ec2-3-217-251-77.compute-1.amazonaws.com:5432/d5fajcrngpr3lo', {
    dialect: 'postgres',
    dialectOptions: { ssl: {require: true, rejectUnauthorized: false}}
})

banco.authenticate().then(() => {
    console.log("Autenticado no Banco.")
}).catch((e) => {
    console.log("Erro.", e)
})

module.exports = banco // exportação