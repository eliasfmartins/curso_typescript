async function fetchProduct() {
    const response = await fetch('http://api.origamid.dev/json/notebook.json')
    const data = await response.json()
    console.log(data)
    showProduct(data)
}
interface Empresa {
    nome:string
    funcacao:number
    pais:string
}
interface DataInterface {
    nome:string;
    preco:number;
    garantia:string;
    segurosAcidentes:boolean
    empresaFabricante:{
        nome:string
        funcacao:number
        pais:string
    }
    empresaMontadora:Empresa
    // forma resumida de colocar dados ao invez de repetir 
    }

fetchProduct();
function showProduct(data:DataInterface) {
    document.body.innerHTML=`
    <div>
        <h2>
        ${data. nome}
        </h2>
    </div>
    `
}