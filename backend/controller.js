const express = require('express')
const app = express()
const userService = require('./service/userService.js')
const bP= require('body-parser')

app.use(bP.urlencoded({ extended: true}))

// Cadastro usuario
app.post('/userSignUp', (req, res) => { // receber os valores > enviar para o service > persistir com o Dao
    const usuario = req.body // recebe como obj os valores 

    userService.create(usuario)
        .then(resultado => {
            if (resultado.id) res.send(resultado)
            else res.status(400).send(resultado)
        }) // envia ao service p verificacao e o resultado sera enviado a pagina com 200(padrao) ou 400 (se erro)
})

// Cadastro skills:
app.post('/skill', (req, res) => { 
    const cd_id = req.body.cd_id
    const cd_skill = req.body.nm_skills

    userService.addSkill(cd_id, cd_skill).then(() => res.send("Skill adicionada."))

})

// Detalhar o usuario clicado:
app.get('/user/:cd_id', (req, res) => {
    userService.getUser(req.params.cd_id).then(result => res.send(result))
})

// Pesquisar usuario por stack
app.get('/query/:nm_skills', (req, resp) => {
    userService.query(req.params.nm_skills).then(result => resp.send(result))
})

app.listen(8080, () => console.log('Conexao Express Bem sucedida'))

