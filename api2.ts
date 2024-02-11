async function  fetchCursos() {
    const response = await fetch('http://api.origamid.dev/json/cursos.json');
    const data = await response.json()
    mostarCursos(data)
}
fetchCursos()

interface Curso {
    nome:string
    aulas:number
    gratuito:boolean
    horas:number
    idAulas:number[]
    tags:string[]
    nivel:'iniciante'|'avancado'
}

function mostarCursos(cursos: Curso[]) {
    cursos.forEach(curso => {
        let color;
        if(curso.nivel =='iniciante'){
            color='blue';

        }else{
            color = 'black'
        }
      document.body.innerHTML+=`
      <div>
            <h2>${curso.nome}</h2>
      </div>`
    })

}