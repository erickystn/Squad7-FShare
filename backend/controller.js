const express = require('express')
const app = express()
const userService = require('./service/userService.js')
const skillService = require('./service/skillService.js')
const bP= require('body-parser')


app.use(bP.urlencoded({ extended: true}))

// cadastro usuario

app.post('/userSignUp', async ( req, resp)=>{ // receber os valores > enviar para o service > persistir com o Dao
    const usuario = req.body
    const resultado = userService.create(usuario)

    resp.send(resultado.codigo)
    
   // console.log(usuario)
})

// cadastro skills

app.post('/skill', async ( req, resp)=>{ 
    const skills= req.body.skills
    const idUser = req.body.idUser
    const result = skillService.insertSkill(idUser, skills)
    
    resp.send(result)
    
})


// buscar usuario

app.get('/user:id', async (req, resp,) =>{
    const idUser = req.params.id
    const result = userService.getUser(idUser)

    resp.send(result)

})

// pesquisar stack

app.get('/query:stack', (req, resp) =>{

    const busca = req.params.stack
    const result = userService.getUsers(busca)

    resp.send(result)
    
})


// alteracao, delecao 


app.listen(8080, () => console.log('Conexao Bem sucedida'))

