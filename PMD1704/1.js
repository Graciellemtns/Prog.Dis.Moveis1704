/*1. Escreva funções que implementam as quatro operações aritméticas. Todas elas devem
receber dois valores numéricos como parâmetro e devolver o valor de sua respectiva
operação. Faça a implementação usando a palavra function para todas elas.*/

function soma(firstValue, secondValue) {
  return firstValue + secondValue;
}
function subtracao(firstValue, secondValue) {
  return firstValue - secondValue;
}
function multiplicacao(firstValue, secondValue) {
  return firstValue * secondValue;
}
function divisao(firstValue, secondValue) {
  return firstValue / secondValue;
}
var x = 10
var y = 2
console.log("Soma = " + soma (x,y))
console.log("Subtracao= = " + subtracao (x,y))
console.log("Multiplicacao = " + multiplicacao (x,y))
console.log("Divisao = " + parseFloat(divisao(x, y).toFixed(2)))