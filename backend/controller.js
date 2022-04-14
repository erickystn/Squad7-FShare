const express = require('express')
const app = express()
const userService = require('./service/userService.js')
const bP = require('body-parser')
const cors = require('cors')
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200 // For legacy browser support
}


app.use(bP.urlencoded({ extended: true }))
app.use(cors(corsOptions))

// Cadastro usuario
app.post('/userSignUp', (req, res) => {
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

    userService.addSkill(cd_id, cd_skill).then((result) => result ? res.send(result) : res.status(400).send(result))

})

// Listar todos os usuarios:
app.get('/users', (req, res) => {

    userService.allUser().then(result => res.send(result))
})

// Detalhar o usuario clicado:
app.get('/user/:cd_id', async (req, res) => {

    await userService.getUser(req.params.cd_id).then(result => {
        res.send(result)
    })

})

// Pesquisar usuario por stack
app.get('/query/:nm_skills', (req, resp) => {
    userService.query(req.params.nm_skills).then(result => resp.send(result))
})

app.listen(3001, () => console.log('Conexao Express Bem sucedida'))

