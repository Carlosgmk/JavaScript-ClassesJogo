let nome = prompt("Digite seu nome")
let idade = prompt("Digite sua idade")
let tipo = prompt("digite seu tipo")

class InfoPersonagem{
     constructor(nome, idade, tipo) {
         this.nome = nome
         this.idade = idade
         this.tipo = tipo

     }
        Atacar() {
            let ataque;

             if (this.tipo === "mago"){
                ataque = "magia"
                alert(`o ${this.tipo} ${this.nome} atacou usando ${ataque}`)

             } else if (this.tipo === "guerreiro"){
                ataque = "espada"
                alert(`o ${this.tipo} ${this.nome} atacou usando ${ataque}`)

             } else if (this.tipo === "monge"){
                ataque = "usando artes marciais"
                alert(`o ${this.tipo}  ${this.nome}atacou  ${ataque}`)

             } else if (this.tipo === "ninja") {
                ataque = "shuriken"
                alert(`o ${this.tipo} ${this.nome} atacou usando ${ataque}`)
             }
        }

}

let resultado = new InfoPersonagem(nome, idade, tipo)
resultado.Atacar()