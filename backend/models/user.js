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
        nm_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        nm_description: {
            type: Sequelize.STRING, //definir tamanho...
            allowNull: false
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
        }
    }
)

//Para criação da tabela em primeiro momento, caso não exista:
//user.sync()

module.exports =user;