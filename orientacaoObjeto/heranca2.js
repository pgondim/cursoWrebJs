/**
 * Usando Object.create() para herança
 */

 const pai = {nome: 'Leonardo', corCabelo: 'preto'}

 const filha = Object.create(pai)

 filha.nome = 'Alice'
 filha.corCabelo = 'Castanho Escuro'

 console.log(filha)