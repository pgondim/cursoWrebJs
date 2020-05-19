/**
 * Funções factory são aquelas
 * que retoram um objeto
 */

function pessoa(nome = 'João', idade = -1, peso = -1){
    return {
        nome, 
        idade, 
        peso

    }
}

console.log(pessoa('Pedro', 26, 113))

let jessica = pessoa('Jessica', 28, 50)
console.log(jessica)