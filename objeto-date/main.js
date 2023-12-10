/*
Nota
JavaScript conta meses a partir de 0 para 11:

Janeiro = 0.

Dezembro = 11.
*/

const data = new Date();

console.log(data.toString()); // pega a hora atual (Sun Dec 10 2023 06:09:25 GMT-0300 (Horário Padrão de Brasília))
console.log('Dia: ', data.getDate()); // Pega o dia atual
console.log('Mês: ', data.getMonth()); // pega o mês atual
console.log('Ano:', data.getUTCFullYear()); // pega o ano atual
console.log('Hora:', data.getHours()); // pega a hora atual
console.log('Minutos:', data.getMinutes()); // pega os minutos atual
console.log('Segundos:', data.getSeconds()); // pega os segundos 


function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    // Função que formata a data
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda(data.getUTCFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const dataBrasil = formataData(data);

console.log(dataBrasil)