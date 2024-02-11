const numeros = [10,20,30,40,50]
const valores = ['10',20,'30',40,'50']

function maiorQue30(data:number[]){
   return data.filter(n => n >30)

    }

function filtrarValores(data: (string|number)[]){
    return data.filter(item => typeof item ==='number')
}
    console.log(
        maiorQue30(numeros),
        filtrarValores(valores)
    )
