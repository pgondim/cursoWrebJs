/**
 * Math é um objeto em JS 
 * usado para operações matemáticas mais 
 * complexas
 */
const raio = 5;

// Math.PI = objeto que possui uma constante para representar o número PI
// Math.pow = função de exponenciação
const area = Math.PI * Math.pow(raio, 2);


/**
 * ` `      => string que incorpora uma variável
 * ${}      => colocar a variável a ser inserida na string dentro das chaves
 * .toFixed => quantidade de casas depois da vírgula que serão consideradas 
 **/
console.log(`Aréa = ${area.toFixed(2)}`);