const express = require('express')
const db = require('./models/db.js')

const app = express()
const bodyParser = require("body-parser")

//Definindo a forma que vai receber a informação:
app.use(bodyParser.urlencoded({
    extended : true
}))

app.get("/", (req, resp) => {
    resp.send("Pagina inicial.")
})

app.post("/usuario", (req, resp, next) => {
    const usuario = {}
    usuario.nome = req.body.nome
    console.log(usuario)

    resp.send(usuario)
})

app.listen(3000, () => {
    console.log("Iniciou.")
})