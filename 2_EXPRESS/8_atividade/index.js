const express = require('express')
const app = express()

const path = require('path')
const caminho = path.join(__dirname, 'templates')

app.use(express.static('public'))

app.use(express.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    res.sendFile(`${caminho}/index.html`)
})

app.get('/usuario/cadastro', (req, res) => {
    res.sendFile(path.join(caminho, 'cadastro.html'))
})

app.post('/usuario/salvar', (req, res) => {
    const nome = req.body.nome
    const idade = req.body.idade

    console.log(`
        Usuário: ${nome}
        Idade: ${idade}
    `)

    res.redirect('/')
})

app.use(express.json())

app.listen(5000)