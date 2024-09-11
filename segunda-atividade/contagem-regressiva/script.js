const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para a contagem regressiva
function contagemRegressiva(numero) {
  console.log(`Iniciando contagem regressiva de ${numero}...`);

  const intervalo = setInterval(() => {
    console.log(numero);
    numero--;

    if (numero < 0) {
      clearInterval(intervalo);
      console.log('Contagem regressiva finalizada!');
      rl.close();
    }
  }, 1000); // A cada 1 segundo (1000 milissegundos)
}

// Solicitando um número ao usuário
rl.question('Digite um número para a contagem regressiva: ', (input) => {
  const numero = parseInt(input);

  if (isNaN(numero) || numero < 0) {
    console.log('Por favor, insira um número válido!');
    rl.close();
  } else {
    contagemRegressiva(numero);
  }
});
