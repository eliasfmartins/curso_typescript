"use strict";
async function fetchProduct() {
    const response = await fetch('http://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    console.log(data);
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML = `
    <div>
        <h2>
        ${data.nome}
        </h2>
    </div>
    `;
}
