/**
 * Podemos usar a palavra reservada
 * arguments
 * para recuperar os argumentos enviados
 * na chamada da função e relaziar 
 * as operações, 
 * deixando assim a função com 
 * paramêtros dinâmicos
 */

function soma(){
    let r = 0
    for (i in arguments){
        r += arguments[i]
    }
    return r
}

console.log(soma())
console.log(soma(2,3))
console.log(soma(5,2,1,4))
