/**
 * ` `      => string que incorpora uma variável
 * ${}      => colocar a variável a ser inserida na string dentro das chaves
 * .toFixed => quantidade de casas depois da vírgula que serão consideradas 
 * 
 * Podemos passar também uma função dentro do ${}
 **/
let nome = `Pedro`
let mensagem = `Olá ${nome} !!`
console.log(mensagem);