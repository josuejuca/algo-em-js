// Operação ternária
// (Condicao) ? 'Valor para Verdadeiro' : 'Valor para Falso'; 
const pontuacaoUsuario = 500; 
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);