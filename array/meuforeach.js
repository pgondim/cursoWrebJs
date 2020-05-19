Array.prototype.forEachMeu = function (minhaFuncao){
    for (let i = 0; i<this.length;i++){
        minhaFuncao(this[i], i, this)
    }
}

const aprovados = ['Agata', 'Aldo', 'Daniel', 'Raquel']

//sempre vai ser conteúdo e índice
aprovados.forEachMeu(function(conteudo, indice){
    console.log(`${indice+1}) ${conteudo}`)
})