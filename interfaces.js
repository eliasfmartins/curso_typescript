"use strict";
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
