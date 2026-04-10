import { useState } from 'react'
import './style.css'



function InfoCurso(){

    const [Pirata, setPirata] = useState("Programação de Aplicativos")
    const [cargaHoraria, setCargaHoraria] = useState(90)
    const [local, setLocal] = useState("SENAI")

    
    return (
        <div className='info-curso'>
            <h2>Dados do Curso:</h2>
            <p><strong>Pirata:</strong> {Pirata}</p>
            <p><strong>Carga Horaria:</strong> {cargaHoraria}</p>
            <p><strong>local:</strong> {local}</p>
        </div>
    )

}

export default InfoCurso