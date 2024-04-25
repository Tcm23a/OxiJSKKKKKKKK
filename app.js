//Criar uma função que exibe "Olá, mundo!" no console.

console.log('olá mundo');

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function recebeNome(){
    let nome = prompt('Qual seu nome :  ');
    console.log(`Olá, ${nome}`);
}
//recebeNome()

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function dobraNumero(){
    let numeroEscolhido = parseInt(prompt('Escolha um numero para duplicar: '));
    alert(numeroEscolhido * 2);
}
//dobraNumero()

//Criar uma função que recebe três números como parâmetros e retorna a média deles.

function mediaNumeros(){
    let numero1, numero2, numero3 = parseInt(prompt('Qual foi sua primeira nota: '));,  parseInt(prompt('Qual foi sua segunda nota:')); parseInt(prompt('Qual foi sua terceira nota:'));
    let media = (((numero1 += numero2) + numero3) /2 );
    console.log(media)
}
mediaNumeros()

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo