const express = require('express')
const app = express()
const userService = require('./service/userService.js')
const bP= require('body-parser')


app.use(bP.urlencoded({ extended: true}))

// cadastro usuario

app.post('/userSignUp', (req, res) => { // receber os valores > enviar para o service > persistir com o Dao
    const usuario = req.body // recebe como obj os valores 

    userService.create(usuario)
        .then(resultado => {
            if (resultado.id) res.send(resultado)
            else res.status(400).send(resultado)
        }) // envia ao service p verificacao e o resultado sera enviado a pagina com 200(padrao) ou 400 (se erro)


})

// cadastro skills

app.post('/skill', (req, res) => { // recebe do front 
    const cd_user = req.body.cd_user
    const nm_skill = Array.isArray(req.body.nm_skills) ? req.body.nm_skills : [req.body.nm_skills]

    userService.addSkill(cd_user, nm_skill).then(resultado => res.send(resultado))

})


// // buscar usuario
// perfil
app.get('/user', (req, res) => {
    const cd_id = req.body.id;

    userService.getUser(cd_id).then(result => res.send(result))


})

// pesquisar stack

app.get('/query', (req, resp) => {

    const busca = req.body.stack
    userService.query(busca).then(result => resp.send(result))


})

//


// alteracao, delecao 


app.listen(8080, () => console.log('Conexao Express Bem sucedida'))

