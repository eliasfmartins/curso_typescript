async function fetchProduct() {
    const response = await fetch('http://api.origamid.dev/json/notebook.json')
    const data = await response.json()
    console.log(data)
    showProduct(data)
}
// interface empresa
interface Empresa {
    nome:string
    funcacao:number
    pais:string
}
// interface motando com outra interface
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
const sum = (n1:number,n2:number)=>{
    return n1+n2
}

function showProduct(data:DataInterface) {
    document.body.innerHTML=`
    <div>
        <h2>
        ${data. nome}
        </h2>
    </div>
    `
    
}
