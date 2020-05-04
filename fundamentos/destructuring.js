/**
 * Destructuring é um jeito mais rápido de 
 * ter acesso a elementos dentro de uma 
 * variável composta, como arrays e objetos
 */

const pessoa = {
    nome: 'Pedro',
    idade: 26,
    endereco: {
        rua: 'Deputado Daniel',
        numero: 2698
    }
};

const {nome, idade} = pessoa;
console.log(nome)
console.log(idade)


const {nome: n, idade: i} = pessoa;
console.log(`O nome é: ${n} com ${i} anos`)

const {endereco: {rua: r, numero: num}} = pessoa
console.log(`Ele mora na Rua ${r} no número ${num}`)
