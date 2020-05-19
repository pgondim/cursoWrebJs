function Pessoa(nome = 'Sem nome'){
    this.nome  = nome
    this.falar = ()=> console.log(`Meu nome é: ${this.nome}`)
}

const pedro = new Pessoa('Pedro')
pedro.falar()