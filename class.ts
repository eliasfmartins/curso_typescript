class Produto{
    nome: string;
    preco: number
        constructor(nome: string, preco:number){
            this.nome = nome
            this.preco= preco
        }
        precoReal(){
            return`R$ ${this.preco}`
        }
}

const livro = new Produto('A Batalha do Apocalipse',280)
console.log(livro.precoReal())
console.log(livro instanceof Produto)// verifica se obj decende da class

class Livro{
    autor: string;
    constructor(autor: string){
        this.autor=autor
    }
}
class Game{
    nameGame:string;
    constructor(name:string){
        this.nameGame=name
    }
}

function buscarProduto(busca:string){
    if (busca ==='O Hobbit'){
        return new Livro('O Hobbit')
    }
    if(busca ==='Dark Souls'){
        return new Game('Dark Souls')
    }
    return null
}
const produto = buscarProduto('O Hobbit')
const game = buscarProduto('Dark Souls')
const nothing = buscarProduto('')
console.log(produto,game, nothing)
if(produto instanceof Livro){
    produto.autor
}