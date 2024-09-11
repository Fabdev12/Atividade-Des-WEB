const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para realizar as operações matemáticas
function calcular(num1, num2, operacao) {
  switch (operacao) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num2 !== 0 ? num1 / num2 : 'Erro: Divisão por zero!';
    default:
      return 'Operação inválida!';
  }
}

// entrada dos números e a operação
rl.question('Digite o primeiro número: ', (n1) => {
  rl.question('Digite o segundo número: ', (n2) => {
    rl.question('Escolha a operação (+, -, *, /): ', (op) => {
      const numero1 = parseFloat(n1);
      const numero2 = parseFloat(n2);
      
      if (isNaN(numero1) || isNaN(numero2)) {
        console.log('Por favor, insira números válidos!');
      } else {
        const resultado = calcular(numero1, numero2, op);
        console.log(`Resultado: ${resultado}`);
      }
      
      rl.close();
    });
  });
});
