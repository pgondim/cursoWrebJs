/**
 * Acumula o ressultado de cada iteração 
 * passando o resultado para a próxima iteração
 * gerando assim um único valor de um array
 */

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.3, bolsista: false},
    {nome: 'Ana', nota: 8.3, bolsista: true},

]

const resultado1 = alunos.map(a=>a.bolsista).reduce((acumulador, atual)=>(acumulador && atual))
console.log(`Todos os alunos são bolsistas: ${resultado1}`)



const resultado2 = alunos.map(a=>a.bolsista).reduce((acumulador, atual)=>(acumulador || atual))
console.log(`Algum aluno é bolsista: ${resultado2}`)