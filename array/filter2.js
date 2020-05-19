const produtos = [
    {nome: 'Notebook', preco:2500, fragil: true},
    {nome: 'iPad', preco:4200, fragil: true},
    {nome: 'Copo Vidro', preco:15.50, fragil: true},
    {nome: 'Copo Plastico', preco:2.4, fragil: false},
]

console.log(produtos)

const filtragem = produtos.filter(p=>(p.preco>500 && p.fragil == true))

console.log(filtragem)