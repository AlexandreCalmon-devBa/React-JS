import './style.css'

function InfoPirata(){
    // Atualizado para o tema One Piece!
    const pirata = "Monkey D. Luffy"
    const recompensa = "3.000.000.000 Berries"
    const akumaNoMi = "Hito Hito no Mi, Modelo: Nika"

    return(
        <div className='info-Pirata'>
            <h2>Perfil do Capitão:</h2>
            <p><strong>Nome:</strong> {pirata}</p>
            <p><strong>Recompensa:</strong> {recompensa}</p>
            <p><strong>Akuma no Mi:</strong> {akumaNoMi}</p>
        </div>
    )
}

export default InfoPirata