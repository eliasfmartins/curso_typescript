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

//  Interfaces basicamente a mesma coisa que type mas e  recomendado o seu uso em objs e classes mais avancadas a diferenca vai ser revelada mais a frente do curso

interface InterfaceProduto {
    nome: string
    preco:number
}
type TypeProdutoo ={
    nome: string
    preco:number
}
//  a diferenca e apenas o sinal de = a mais no type

//  Em resumo type e usado pra definir tipos primitivos como numer string ou  dados simples como nomes e tals
// a interface cabe aos tipos mais complexos