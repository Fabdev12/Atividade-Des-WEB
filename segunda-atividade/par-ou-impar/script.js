var readline = require('readline-sync')

let numero = 0;
let resto = 0;

console.log("-------Par ou Ímpar-------")
numero = parseFloat(readline.question("Informe o numero desejado: "))

resto = numero%2;

if(resto === 0){
    console.log("O numero informado é par")
}else{
    console.log("O numero informado é Ímpar")
}