function Carro(velocidadeMaxima = 200, delta = 5){

    let velocidadeAtual = 0;

    this.acelerar = ()=>{
        if (velocidadeAtual+delta <=velocidadeMaxima){
            velocidadeAtual+=delta;
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidadeAtual = () => velocidadeAtual
}

const uno = new Carro()

uno.acelerar()

console.log(uno.getVelocidadeAtual())