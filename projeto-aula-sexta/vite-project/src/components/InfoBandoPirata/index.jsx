import { useState } from 'react'
import './style.css'

function InfoTripulação(){
    // Atualizado para o tema One Piece!
    const [bando, setBando] = useState("Piratas do Chapéu de Palha")
    const [navio, setNavio] = useState("Thousand Sunny")
    const [objetivo, setObjetivo] = useState("Encontrar o One Piece")
    
    return (
        <div className='info-curso'>
            <h2>Dados da Tripulação:</h2>
            <p><strong>Bando:</strong> {bando}</p>
            <p><strong>Navio:</strong> {navio}</p>
            <p><strong>Grande Objetivo:</strong> {objetivo}</p>
        </div>
    )
}

export default InfoTripulação