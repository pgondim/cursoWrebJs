const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit Lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const obj = carrinho.map(carrinho => JSON.parse(carrinho))

console.log(obj)

const objFiltrado = obj.filter(p=>p.preco>10)

console.log(objFiltrado)