/**
 * Usada para simplificar a declaração de uma função
 * 
 * Tem um this associado que não se altera por causa
 * do escopo/contexto
 * 
 * Função Arrow sempre é anônima
 * 
 * Caso a função seja de uma linha podemos declará-la
 * sem usar {}
 * 
 * Se não usarmos {} o retorno da função fica implicito
 * 
 * Para funções sem parâmetros, usamos () sem nada dentro
 */

 let dobro = function (a){
     return a*2 
 }

 dobro = (a) =>{
     return 2*a
 }

 dobro => a => 2*a //retorno implicito

 console.log(dobro(2))

 

 let ola = () => 'olá'

console.log(ola())

function Pessoa () {
    this.idade = 0

    setInterval(()=>{
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa
