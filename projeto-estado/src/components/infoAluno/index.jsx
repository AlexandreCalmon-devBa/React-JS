import './style.css'

function InfoPirata(){
    const Pirata = "Alexandre Calmon"
    const idade = 20
    const curso = "Desenvolvimento de Sistemas"


    return(

    <div className='info-Pirata'>
        <h2>Informações do Pirata:</h2>
        <p><strong>Pirata:: {Pirata}</strong></p>
        <p><strong>Idade: {idade}</strong></p>
        <p><strong>Curso: {curso}</strong></p>
        </div>
    )

}

export default InfoPirata