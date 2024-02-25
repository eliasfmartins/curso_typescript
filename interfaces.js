"use strict";\
// nao permite typagen any entre outras coisas
// literamente mostra as opcoes que vc pode utilizar quando chama a funcao
function preencherDados(dados) {
    document.body.innerHTML = `
    <div>${dados.nome}{</div>`;
}
preencherDados({ nome: "Computador", preco: 1500 });
const biscoito = (param) => {
    console.log(param);
};
biscoito("teste");
//  a diferenca e apenas o sinal de = a mais no type
//  Em resumo type e usado pra definir tipos primitivos como numer string ou  dados simples como nomes e tals
// a interface cabe aos tipos mais complexos
