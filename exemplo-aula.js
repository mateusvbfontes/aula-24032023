// const pessoa1 = {
//     nome : "Teste",
//     email : "teste@teste.com.br",
//     hobbies: [
//         "Hobby1", "Hobby2"
//     ],
//     falar: function(){
//         console.log("oi")
//     }
// }

// console.log(pessoa1.nome)
// pessoa1.falar()
// pessoa1.cpf = 1000000

// console.log(pessoa1.cpf)

// class Pessoa{
//     constructor(nome,email,hobbies){
//         this.nome = nome
//         this.email = email
//         this.hobbies = hobbies
//     }

//     falar(){
//         console.log("oi")
//     }
// }

// const pessoa2 = new Pessoa("Teste 2","email@email",["A","B","C"])
// console.log(pessoa2.nome)
// pessoa2.falar()


const express = require("express")
const app = express()
const port =  5200

app.get('/',(req,res) => {
    res.send("Olá mundo!")
})

let soma = 0
app.get('/somar',(req,res) => {
    soma++
    res.send(JSON.stringify(soma))
})


app.get('/bibliotecas',(req,res) => {
    const bibliotecas = {
        nome: "Teste-express",
        vers: 1,
        bibliotecas: ["Express","React"]
    }
    const bibliotecasJson = JSON.stringify(bibliotecas)
    res.setHeader("Content-Type","application/json")
    res.send(bibliotecasJson)
})


app.listen(port,() => {
    console.log('App executando na porta '+port)
})