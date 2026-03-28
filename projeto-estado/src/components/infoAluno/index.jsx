import './style.css'

function InfoAluno(){
    const nome = "Alexandre Calmon"
    const idade = 20
    const curso = "Desenvolvimento de Sistemas"


    return(

    <div className='info-aluno'>
        <h2>Informações do Aluno:</h2>
        <p><strong>Nome:: {nome}</strong></p>
        <p><strong>Idade: {idade}</strong></p>
        <p><strong>Curso: {curso}</strong></p>
        </div>
    )

}

export default InfoAluno