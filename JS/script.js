
/*Você pode apresentar o resultado tanto no **console** quanto em um **alerta** no navegador.
1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
    
    💡 Para saber o tipo de dado você pode usar o operador `typeof`
    
4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".*/

alert ("Hello World!")
console.log("Desafio 1 - Hello World!")
console.log("Desafio 2")
const sumA = 250;
const sumB = 3520;
const resultSum = sumA + sumB;
console.log(`A soma de ${sumA} + ${sumB} = ${resultSum}`)
console.log("Desafio 3")
const numberX = 5;// input
const res = typeof(numberX)
console.log(`O caracter "${numberX}" é do tipo ${res}. `)
if (res === "number") {
    console.log("É um número.")
}
else{
    console.log("Não é um número.")
}
console.log("Desafio 4")
const stringX = "Oi";// input
const resu = typeof(stringX)
console.log(`O caracter "${stringX}" é do tipo ${resu}.`)
if (resu === Number) {
    console.log("Não é uma String.")
}
else{
    console.log("É uma String.")
}
console.log("Desafio 5")
const booleanX = true;// input
const resBoolean = typeof(booleanX)
console.log(`O caracter "${booleanX}" é do tipo ${resBoolean}.`)
if (booleanX === true || booleanX === false) {
    console.log("É um booleano.")
}
else{
    console.log("Não é um booleano.")
}
console.log("Desafio 6")
const subA = 10250;
const subB = 3520;
const resultSub = subA - subB;
console.log(`A subtração de ${subA} + ${subB} = ${resultSub}`)
console.log("Desafio 7")
const multA = 102;
const multB = 3520;
const resultMult = multA * multB;
console.log(`A multiplicação de ${multA} + ${multB} = ${resultMult}`)
console.log("Desafio 8")
const divA = 10590;
const divB = 35;
const resultDiv = divA / divB;
console.log(`A divisão de ${divA} + ${divB} = ${resultDiv}`)
console.log("Desafio 9")
const val = 124;
console.log(`O número ${val}:`)
if (val % 2 === 0) {
    console.log("É par.")
}
else {
    console.log("Não é par.")
}
console.log("Desafio 10")
const valOdd = 123;
console.log(`O número ${valOdd}:`)
if (val % 1 === 0) {
    console.log("É impar.")
}
else {
    console.log("Não é impar.")
}
