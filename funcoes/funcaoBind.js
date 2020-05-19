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
const pessoa = {
    frase: 'Bom dia!',
    falar (){
        console.log(this.frase)
    }
}

/**
* quando chamarmos a função falar diretamente
* do objeto pessoa ela irá funcionar
*/
pessoa.falar()

/**
 * agora, se tentarmos armazenar a função
 * em uma variável e usarmos a função, 
 * não dará certo, o retorno será undefined 
 */
const fala = pessoa.falar
fala()

/**
 * para termos acesso ao que foi definido
 * dentro de pessoa, em outro contexto
 * devemos usar a função bind(), ela
 * nos dá acesso ao this dentro de pessoa
 */
const falaPessoa = pessoa.falar.bind(pessoa)
falaPessoa()


