// Mude as variaveis para o valor do comentario. 
let varA = 'A'; // B
let varB = 'B'; // C 
let varC = 'C'; // A
/*
// Opção 1

const letA = varA;

varA = varB;
varB = varC;
varC = letA;

*/

// Opção 2
[varA , varB , varC] = [varB, varC, varA]

console.log( varA,varB, varC)