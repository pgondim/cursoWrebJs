/**
 * as funções não precisam retornar nada
 * 
 * podemos associar um valor padrão para um parâmetro,
 * caso ele não seja passado quando a função for chamada
 * para isso, basta setar o valor desejado na declaração
 * dos parâmetros da função
 */

 function imprimeSoma(a = 0,b=0){
     console.log(a+b)
 }

 function soma(a = 0,b = 0){
     return a+b
 }

 imprimeSoma(2)

 console.log(soma(2,3))
 