/**
 * Esse exemplo mostra como uma variável do tipo
 * var se comporta em relação a um loop
 * 
 * Como var pode ser vista em todo o escopo do código
 * (menos se for declarada dentro de função, veja arquivo
 *  variáveis)
 * quando chamamos a função contida dentro da terceira
 * posição de funcs, ou seja, funcs[2] a variável i já 
 * foi processada pelo loop e vale 10
 */

const funcs = []

for(var i = 0;i <10; i++){
    funcs.push(function(){
        console.log(i);
    });
}

funcs[2]()
funcs[5]()