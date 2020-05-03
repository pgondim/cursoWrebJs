let eAtivo = false
console.log(eAtivo)

eAtivo = true
console.log(eAtivo)

/**
 * qualquer valor número exceto o 0 também representa valor true 
 * 
 * porém ele vai ser considerado um tipo number e não um tipo boolean
 * 
 * para conseguir a representação do boolean com 1 devemos usar uma notação lógica 
 * que pode ser a de negação por exemplo !
 * 
 * objeto negado duas vezes volta ao seu valor original
 */

eAtivo = 1
// true
console.log(!!eAtivo)
//false
console.log(!eAtivo)

console.log('Considerados valores verdadeiros: ')
console.log(!!52)

//uma string contendo qualquer caracter (mesmo o espaço)
console.log(!!' ')

//array vazio
console.log(!![])

//objeto vazio
console.log(!!{})

//o infinito
console.log(!!Infinity)

//quando o que está do lado direito da atribuição é considerado verdadeiro, a atribuição em si é considerada verdadeira
console.log(!!(eAtivo = true))

console.log('\nConsiderados como valores falsos: ')
console.log(!!0)

//string vazia
console.log(!!'')

//valor null
console.log(!!null)

//not a number
console.log(!!NaN)

//valor indefinido (quando é declarado mas não inicializado)
console.log(!!undefined)

//quando o que está do lado direito da atribuição é considerado falso, a atribuição em si é considerada false
console.log(!!(eAtivo = false))
