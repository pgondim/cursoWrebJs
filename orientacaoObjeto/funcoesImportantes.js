const pessoa = {
    nome: 'Pedro',
    idade: 26,
    sexo: 'M',
    peso: 113
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

//assign -> concatena os objetos com o primeiro da função, sobrescreve os valores 
const destino = {a: 1}
const o1 = {b: 2}
const o2 = {c:3, a:4}
const o3 = {b:5}

Object.assign(destino, o1,o2,o3)

console.log(destino)