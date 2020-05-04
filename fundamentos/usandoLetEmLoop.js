/**
 * Esse exemplo mostra como uma variável do tipo
 * let se comporta em relação a um loop
 * 
 * Como let pode ser vista no seu escopo de criação
 * quando chamamos a função contida na terceira
 * posição de funcs, ou seja, funcs[2] a variável i
 * respeita o incremento do loop e terá os valores
 * de acordo com seu índice de chamada
 */

const funcs = []

for(let i = 0;i <10; i++){
    funcs.push(function(){
        console.log(i);
    });
}

funcs[2]()
funcs[5]()