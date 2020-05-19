/**
* Podemos criar uma função dentro de um objeto
* porém se usarmos o this para acessar um 
* recurso dentro do objeto e usá-lo na 
* função, a função irá funcionar 
* apenas no contexto do objeto, 
* ou seja, se tentarmos usar a 
* função fora no contexo do 
* objeto, não consigremos
*/

/*
function Pessoa () {
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}
*/

/*OU*/

function Pessoa () {
    this.idade = 0

    const self = this

    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new Pessoa
