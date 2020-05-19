const aprovados = ['Agata', 'Aldo', 'Daniel', 'Raquel']

//sempre vai ser conteúdo e índice
aprovados.forEach(function(nome, indice){
    console.log(`${indice+1}) ${nome}`)
})

// com arrow function
aprovados.forEach(nome=> console.log(nome))

//colocando uma função em uma variável e passando para o foreach
const exibirAprovado = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovado)