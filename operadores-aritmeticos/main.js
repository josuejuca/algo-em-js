/* 
 * Operadores Aritmeticos 
 * +  (Adição)
 * -  (Subtração)
 * /  (divisão)
 * *  (multiplicação )
 * ** (Exponenciação)
 *  % (Resto da divisão)
 */ 

const num1 = 10;
const num2 = 8;

const soma = num1 + num2;
const sub = num1 - num2;
const div = num1 / num2;
const mul = num1 * num2;

// Contaodor 

// Incremento ++
//  Decremento --

let contador = 1;
contador++; // 2
contador++; // 3 
contador++; // 4
contador++; // 5

console.log(contador, ++contador);

let contador2 = 0;
const passos = 2;
contador2 += passos; // contador2 = contador2 + passos

console.log(contador2)


// Transformar string em numero 

let idade = "19"; // string 19
console.log( typeof idade, idade);
idade = Number(idade); // number 19
console.log( typeof idade, idade); 