//3. Crie um objeto JSON que abriga todas as operações do exercício 2.

var json = {
  soma: (firstValue, secondValue) => {return firstValue + secondValue},
  subtracao: (firstValue, secondValue) => {return firstValue - secondValue},
  multiplicacao: (firstValue, secondValue) => {return firstValue * secondValue},
  divisao: (firstValue, secondValue) => {return firstValue / secondValue},
}

var x = 10
var y = 2

console.log("Soma = " +json.soma(x, y));
console.log("Subtracao = " +json.subtracao(x, y));
console.log("Multiplicacao = " +json.multiplicacao(x, y));
console.log("Divisao = " +json.divisao(x, y));