const Sequelize = require('sequelize') 
const db = require('../db.js')
const user = require('./user')

const skill = db.define(
    'skill',
    {
        cd_user: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            
        },
        cd_skill: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nm_skill: {
            type: Sequelize.STRING, //definir tamanho...
            allowNull: false
        }
    }
)

user.hasMany(skill, {
    foreignKey: 'cd_user'
  });
 skill.belongsTo(user);
  

//Para criação da tabela em primeiro momento, caso não exista:
// skill.sync()

module.exports = {skill}