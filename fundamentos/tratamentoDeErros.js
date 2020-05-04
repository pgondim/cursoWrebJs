function imprimeNome(obj){
    try {
        console.log(obj.nomes.toUpperCase()+'!!!')
        
    } catch (error) {
        console.log('Algo deu errado!')
    }
}

const obj = {nome: 'Pedro'}
imprimeNome(obj)