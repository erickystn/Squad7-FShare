const Sequelize = require('sequelize') 
const db = require('./db.js')

const user = db.define(
    'user',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING, //definir tamanho...
            allowNull: false
        },
        role: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING, //definir tamanho...
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        stack: {
            type: Sequelize.INTEGER, //definir tamanho...
            allowNull: true
        }
    }
)

//Para criação da tabela em primeiro momento, caso não exista:
// user.sync()
