var readline = require('readline-sync');

let nome = "";
let nota1 = 0;
let nota2 = 0;
let nota3 = 0;
let nota4 = 0;
let media = 0;

//requisição de dados
console.log("--------Cálculo de Média Escolar--------")
nome = readline.question("Digite o seu nome: ")
nota1 = parseFloat(readline.question("Informe a sua primeira nota: "))
nota2 = parseFloat(readline.question("Informe a sua segunda nota: "))
nota3 = parseFloat(readline.question("Informe a sua terceira nota: "))
nota4 = parseFloat(readline.question("Informe a sua quarta nota: "))


media = (nota1+nota2+nota3+nota4)/4;

if(media >= 7){
    console.log(nome + " sua média foi " + media + ", você foi aprovado!!!")
}else{
    console.log(nome + " sua média foi " + media + ", infelizmente você foi reprovado!")
}