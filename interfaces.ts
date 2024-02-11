 type NumberOrString = string| number

 type Produto= {
    nome:string,
     preco: number
    }
//  ao invez de passar os dados diretamente vc cria um obj com a tipagem e referencia apenas a tipagem
// Alem de tipos primitivos tbm e possivel passar parametros pre definidos
type Categorias = "teste"|"Another"|"Mais um"

// literamente mostra as opcoes que vc pode utilizar quando chama a funcao
 function preencherDados(dados:Produto){
    document.body.innerHTML=`
    <div>${dados.nome}{</div>`
}
preencherDados({nome:"Computador",preco:1500})

const biscoito = (param :Categorias)=>{
    console.log(param)
}
biscoito("teste")