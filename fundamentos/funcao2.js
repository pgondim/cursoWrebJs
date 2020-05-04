/**
 * Armazenamento de função em variável
*/
let f = function (a,b){
    console.log(a+b)
}
f(2,3)

/**
 * Função Arrow dentro de uma variável
 */
let seta = (a,b) =>{
    return a+b
}

/**
 * Podemos escrever uma função arrow sem os delimitadores
 * porém ela deve executar apenas uma tarefa(senteça)
 * e seu resultado será automaticamente retornado 
 */
let soma = (a,b) => a+b
console.log(soma(20,30))