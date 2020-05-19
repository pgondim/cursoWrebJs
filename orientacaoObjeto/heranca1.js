/**
 * Herança é representada pelo atributo __proto__
 * Ou seja 
 * Um objeto que tenha o __proto__ herdará os atributos
 * e os métodos do objeto ao qual faz referência 
 * 
 * Caso tenhamos o mesmo atributo no objeto corrente e no objeto pai
 * valerá aquele do objeto corrente (regra do mais próximo no JS)
 * 
 * Usamos a palavra reservada super para acessar métodos do obj pai
 * Ex: super.falar()
 */

const avo   = {at1: 'A'}
const pai   = {at2: 'B', __proto__: avo}
const filho = {at3: 'C', __proto__: pai}

console.log(filho)
console.log(filho.at1, filho.at2)