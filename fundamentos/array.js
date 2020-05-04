/**
 * Array em português significa arranjo
 * por definição, em programação array é um 
 * conjunto de valores que são agrupados de maneira
 * unidimensional. 
 * 
 * Podemos comparar um array como uma fila
 * 
 * Exemplo:
 * [15,'olá',1.42,false,42]
 * 
 * Cada um dos elementos dentro de um array está relacionado a um índice 
 * 
 * Exemplo:
 * O número 15 é o primeiro elemento do array, então seu índice será 0
 * A string 'olá' é o segundo elemento do array, então seu indice será 1
 * e assim sucessivamente
 * 
 * Diferentemente de outras linguagens de programação um array pode 
 * conter elementos de diferentes tipos de dados
 * 
 * Array em JS é considerado um objeto
 */

//declarando um array
 let array

 //inicializando um array
 array = [15,'olá',1.42,false,42]

//podemos declarar e inicializar um array em uma única linha
//let array = [15,'olá',1.42,false,42]

//acessando elementos do array via índice
 console.log(array[0])
 console.log(array[1])

 //um array ou uma posição no array que não possui nada é considerada undefined
 array = []
 console.log(array[0])

 array = [15,'olá',1.42,false,42]
 
 //inserindo elementos no array
 array.push('sexto elemento', 7, 8.5)
 console.log(array[5])