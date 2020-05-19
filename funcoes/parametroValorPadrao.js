/**
 * Podemos setar os valores 
 * padrões de uma função
 * logo quando definimos
 * no cabeçalho
 */

function soma(a = 0,b = 0,c = 0){
    return a+b+c
}

console.log(soma(2,3))
console.log(soma(2))



