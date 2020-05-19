// instanciação de um novo objeto
const produto = new Object;

produto.nome = 'Computador';
produto['marca do produto'] = 'Dell';
console.log(produto)

//array de objetos
const proprietario = [{
    nome: 'Pedro',
    idade: 26
},{
    nome: 'Jessica',
    idade: 28
}]

for (p in proprietario){
    console.log(proprietario[p])
}
