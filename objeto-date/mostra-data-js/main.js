const data = new Date();

const diaSemana = data.getDay();
const dia = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();

const hora = zeroAEsquerda(data.getHours());
const min = zeroAEsquerda(data.getMinutes());

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function getMesTexto(mes) {
    let mesTexto;
    switch (mes) {
        case 0:
            mesTexto = `Janeiro`;
            return mesTexto;
        case 1:
            mesTexto = `Fevereiro`;
            return mesTexto;
        case 2:
            mesTexto = `Março`;
            return mesTexto;
        case 3:
            mesTexto = `Abril`;
            return mesTexto;
        case 4:
            mesTexto = `Maio`;
            return mesTexto;
        case 5:
            mesTexto = `Junho`;
            return mesTexto;
        case 6:
            mesTexto = `Julho`;
            return mesTexto;
        case 7:
            mesTexto = `Agosto`;
            return mesTexto;
        case 8:
            mesTexto = `Aetembro`;
            return mesTexto;
        case 9:
            mesTexto = `Outubro`;
            return mesTexto;
        case 10:
            mesTexto = `Novembro`;
            return mesTexto;
        case 11:
            mesTexto = `Dezembro`;
            return mesTexto;

    }
}
let mesTexto = getMesTexto(mes);

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = `Domingo`;
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = `Segunda`;
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = `Terça`;
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = `Quarta`;
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = `Quinta`;
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = `Sexta`;
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = `Sábado`;
            return diaSemanaTexto;
        default:
            diaSemanaTexto = ``;
            return diaSemanaTexto;
    }
}

let diaSemanaTexto = getDiaSemanaTexto(diaSemana);

const msg = `Hoje é ${diaSemanaTexto}, ${dia} de ${mesTexto}, de ${ano} às ${hora}:${min}`

function criaH1(){
    const h1 = document.createElement(`h1`);
    return h1;
}

setResultado(msg);
function setResultado(msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const h1 = criaH1();
    h1.innerHTML = msg;
    resultado.appendChild(h1);
  }