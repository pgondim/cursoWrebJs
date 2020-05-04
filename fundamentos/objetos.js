/**
 * Objetos são conjutos de chave  e valor 
 * 
 * Com array temos a chave sendo seu índice e seu valor sendo seu conteúdo
 * o conteúdo pode ser até mesmo uma função
 * 
 * Com objetos podemos definir qual será o "índice" de cada elemento
 * 
 * Um objeto não é um JSON 
 * JSON são elementos textuais que podem ser interpretados por computadores 
*/

//declarando um objeto vazio
let objetos = {}

//podemos declarar cada chave e valor separadamente
objetos.nome = 'Acer'
objetos.tipo = 'Computador'

//ou podemos passar tudo junto de uma vez, as será o mesmo resultado
objetos = {nome: 'Acer', tipo: 'Computador'}

console.log(objetos)

console.log(objetos.nome)