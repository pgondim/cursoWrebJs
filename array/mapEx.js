const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit Lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//transforma um Json em um objeto
const paraObjeto = json => JSON.parse(json)
const preco = produto => produto.preco

const precos = carrinho.map(paraObjeto).map(preco)

console.log(precos)