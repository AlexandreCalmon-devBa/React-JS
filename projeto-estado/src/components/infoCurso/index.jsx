import { useState } from 'react'
import './style.css'



function InfoCurso(){

    const [nome, setNome] = useState("Programação de Aplicativos")
    const [cargaHoraria, setCargaHoraria] = useState(90)
    const [local, setLocal] = useState("SENAI")

    
    return (
        <div className='info-curso'>
            <h2>Dados do Curso:</h2>
            <p><strong>Nome:</strong> {nome}</p>
            <p><strong>Carga Horaria:</strong> {cargaHoraria}</p>
            <p><strong>local:</strong> {local}</p>
        </div>
    )

}

export default InfoCurso