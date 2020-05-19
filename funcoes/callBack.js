/**
 * Passa uma determinada função para outra
 * e quando um evento acontecer,
 * essa função que foi passada 
 * será chamada
 */

const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(conteudo, indice){
    console.log(`${indice+1}.${conteudo}`)
}

fabricantes.forEach(imprimir)

console.log('\nOutro Teste\n')

fabricantes.forEach((conteudo, indice)=>{
    console.log(`${indice+1}.${conteudo}`)
})

console.log('\nOutro Teste\n')

fabricantes.forEach((fabricante)=>{
    console.log(fabricante)
})