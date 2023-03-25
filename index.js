const express = require("express")
const app = express()
const port =  5200

class Pessoa{
    constructor(nome,email,idade,hobbies){
        this.nome = nome
        this.email = email
        this.idade = idade
        this.hobbies = hobbies
    }
}

const stephen = new Pessoa("Stephen Cleary", "stephen.cleary@dotnet.com", "33", ["Coding","Church","Writing"])
const jon = new Pessoa("Jon Skeet", "jon.skeet@dotnet.com", "35", ["Blogging","Coding","Answer questions at Stack Overflow"])
const nick = new Pessoa("Nick Chapsas", "nick.chapsas@dotnet.com", "28", ["Coding","Make YB videos","Writing"])

app.get('/pessoa/1',(req,res) => {
    res.send(JSON.stringify(stephen))
})

app.get('/pessoas',(req,res) => {
    res.send(JSON.stringify([stephen, jon, nick]))
})

app.listen(port,() => {
    console.log('Up and running at port '+port)
})