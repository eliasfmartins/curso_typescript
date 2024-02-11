"use strict";
// function normalizarTexto(texto: string){
//     return texto.trim().toLowerCase()
// }
// console.log(
//     normalizarTexto('   Teste Desing                                                 ')
//     )
const input = document.querySelector('input');
const total = localStorage.getItem('total');
// pega o valor da chave total do localStorage 
if (input && total) {
    input.value = total;
    caucularGanho(Number(input.value));
}
//  seta o valor do input pro salvo no localStorage
function caucularGanho(value) {
    const p = document.querySelector('p');
    if (p) {
        p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
    }
}
function totalMudou() {
    if (input) {
        localStorage.setItem('total', input.value);
        caucularGanho(Number(input.value));
    }
}
if (input) {
    input.addEventListener('keyup', totalMudou);
}

const frase = 'Front End'
const preco =500
const condi = preco>100
console.log(typeof false)