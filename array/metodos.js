const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos)

pilotos.pop()//RETIRA o ÚLTIMO elemento do array
console.log(pilotos)

pilotos.push('Verstappen')//INSERE um elemento na ÚLTIMA posição do array
console.log(pilotos)

pilotos.shift()//RETIRA o PRIMEIRO elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton')//INSERE um elemento na PRIMEIRA posição do array
console.log(pilotos)


/**
 * 1ºparam:           a partir de qual índice vamos trabalhar
 * 2ºparam:           quantidade de indices que vamos trabalhar
 * 3ºparam em diante: elementos que vamos inserir no array dependendo do 1º e 2º param 
 */
pilotos.splice(2,0,'Bottas', 'Massa')/
console.log(pilotos)

/**
 * 1ºparam:           a partir de qual índice vamos trabalhar
 * 2ºparam:           quantidade de indices que vamos trabalhar
 * Quando tempos apenas 2 paramêtros removemos o elemento(s) 
 */
pilotos.splice(2,1)/
console.log(pilotos)


const algunsPilotos1 = pilotos.slice(2)//cria um novo array a partir do indice 2 até o final
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)//cria um novo array incluindo o indice 1 mas não incluindo o indice 4
console.log(algunsPilotos2)