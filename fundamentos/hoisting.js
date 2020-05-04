/**
* Hoisting em português significa içar,
* ou seja, elevar, subir...
* 
* Em JS, quando uma variável do tipo var 
* é declarada, sua declaração é içada para
* o topo do bloco, ou seja, sua variável
* é criada assim que o script for executado
* porém suas atribuições e demais operações
* seguirão a ordem do seu script
*/

console.log(`Variável a => ${a}`)
var a = 10
console.log(`Variável a => ${a}`)

/**
 * Como o interpretador do JS "entende" esse código:
 * 
 * var a
 * console.log(`Variável a => ${a}`)
 * a = 10
 * console.log(`Variável a => ${a}`)
*/


