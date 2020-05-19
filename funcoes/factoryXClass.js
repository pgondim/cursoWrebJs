
//Com classe
class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Pedro')
p1.falar()



//Com Factory
const criarPessoa = nome=>{
    nome = nome
    return{
        falar: ()=> console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Jessica')
p2.falar()
