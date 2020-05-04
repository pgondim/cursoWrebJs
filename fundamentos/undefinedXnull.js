/**
 * Para tipos não primitivos como objeto e array
 * quando fazemos uma atribuição, o JS faz essa
 * atribuição por referência, ou seja, 
 * 
 * na verdade a variável não contém o valor dos elementos em si
 * a variável contém o endereço de memória no qual os elemetos 
 * estão armazenados. 
 * 
 * Então, quando fazemos uma atribuição dessa variável para outra
 * estamos fazendo com que essa outra variável também receba o 
 * endereço de memória. 
 * 
 * Por isso, quando alteramos essa nova variável, a primeira variável
 * também sofre os efeitos dess alteração
 * 
 * OBS: tipos primitivos como int, boolean não são passagens por referência 
 * e sim passagem por valor 
 * 
 * OBS2: strings são considerados tipos primitivos
 */

 /**
  * undefined = variável foi declarada mas não foi inicializada
  * null = variável não aponta para nenhum endereço de memória
  */

 //exemplo com objeto
let a = {nome: 'teste'}
let b = a
b.nome = 'trocou'
console.log(a.nome)

//exemplo com array
let array1 = [1,2,3]
let array2 = array1
array2[0] = 3
array2[1] = 3
console.log(array1[0])
console.log(array1[2])

//exemplo com string
let string1 = 'teste'
let string2 = string1
string2 = 'trocou'
console.log(string1)

