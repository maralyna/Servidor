const express = require("express")
const router = express.Router()

const app = express()
const porta = "3333"

const mulheres =[
    {
        nome: "Maralyna Castellamary",
        minibio: "Desenvolvedora",
        curso: "Engenharia de Software"
    },

    {
        nome: "Iana Chan",
        minibio: "Fundadora da PrograMaria"
    },

    {
        nome: "Nina da Hora",
        minibio: "Hacker antirracista"
    }
]
//array de objetos e dentro deles conteudos.
function mostraMulheres(request, response){
    response.json(mulheres)
}
function mostrarPorta () {
    console.log("Servidor criado e rodando na porta:", porta)
}
app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostrarPorta)