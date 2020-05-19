function getPreco(imposto = 0, moeda ='R$'){
    return`${moeda} ${this.preco * (1-this.desc) * (1+imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 3500,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco())
console.log(produto.getPreco(0.2,'Teste'))

const carro = {
    preco: 20000,
    desc: 0.1,
}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))


//passamos o contexto(carro) e depois os parâmetros da função getPreco
console.log(getPreco.call(carro, 0.13, 'US$'))

//passamos o contexto(carro) e depois os parâmetros da função getPreco dentro de um array
console.log(getPreco.apply(carro,[0.13,'US$']))
