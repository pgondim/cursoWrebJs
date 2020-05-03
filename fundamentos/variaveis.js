/*
 * Variáeis var
 * 
 * Podem ser usadas fora do bloco das quais foram criadas 
 * 
 * O JavaScript move as variáveis para o topo do seu escopo antes da execução do código (hoisting).
 * Isso faz com que seja possível utilizar uma variável mesmo antes de declará-la,
 * mesmo não sendo uma boa prática de programação
 * 
 * Caso var seja declarado mas não inicializado, a variável recebe undefined
*/

function semErro(){
    var msg = `Mensagem será exibida sem erro`;
    console.log(msg);
}

/*
 * Variáveis let
 * 
 * Não podem ser usadas fora do escopo do bloco
 * 
 * Caso let seja declarado mas não inicializado, a variável receber undefined
*/

function comErro(){
    {
        let msg = `Mensagem criada dentro de um bloco com tentativa de usa-la fora desse bloco`;
    }
    console.log(msg);
}

/*
* Variáveis const
* 
* Não podem ser usadas fora do escopo do bloco
* 
* Devem ser inicializadas junto com sua declaração
* 
* Seu valor não pode sr alterado
*/

//se tentarmos declacar uma const sem inicialização dará erro
//const numero

const numero = 5

semErro();

//se tentarmos executar a função "comErro()" não dará certo
//comErro();

console.log(numero)

//se tentarmos trocar o valor da constante numero, dará erro
//numero = 3