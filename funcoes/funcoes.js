/**
 * Funções podem retornar outras funções
 * 
 * Podemos traçar um paralelo com:
 * um array pode ter vários arrays dentro dele
 */

 function soma(a,b){
     return function (c){
         console.log(a+b+c)
     }
 }

 soma(1,2)(3)

 const cincoMais = soma(2,3)
 cincoMais(4)