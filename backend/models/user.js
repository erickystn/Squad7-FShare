const Sequelize = require('sequelize') 
const db = require('../db.js')

const user = db.define(
    'user',
    {
        cd_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nm_pic: {
            type: Sequelize.STRING,
            allowNull: true
        },
        nm_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        nm_description: {
            type: Sequelize.STRING, //definir tamanho...
            allowNull: true
        },
        nm_role: {
            type: Sequelize.STRING,
            allowNull: false
        },
        nm_email: {
            type: Sequelize.STRING, //definir tamanho...
            allowNull: false
        },
        cd_password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        nm_url: {
            type: Sequelize.STRING,
            allowNull: true
        },

        nm_skills: {
            type: Sequelize.STRING,
            allowNull: true
        }
    }
)

//Para criação da tabela em primeiro momento, caso não exista:
//user.sync().then(() => console.log('Tabela Criada'))

module.exports = user;