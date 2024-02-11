function toNumber (value: number| string){
    if (typeof value ==='number'){
        return value
    }else if(typeof value ==='string'){
        return Number(value)
    }else{
        throw'value deve ser number | string'
    }
}
// type guardian basicamente vc verifica o tipo de dado antes de executar a funcao pra evitar possiveis erros
console.log(

    toNumber(20)
)