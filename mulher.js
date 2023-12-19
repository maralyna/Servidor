const express = require("express")
const router = express.Router()
const app = express()
const porta = "3333"
function mostraMulher(request, response) {
    response.json({
        nome: 'Maralyna Castellamary',
        Imagem: 'https://avatars.githubusercontent.com/u/87288641?s=96&v=4',
        minibio: 'Desenvolvedora'
    })
}
function mostrarPorta () {
    console.log("Servidor criado e rodando na porta:", porta)
}
app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostrarPorta)