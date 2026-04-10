import { useState } from 'react'
import './style.css'

function AdicionarPirata() {
  const [Pirata, setPirata] = useState("")
  const [Função, setFunção] = useState("")
  const [Tripulação, setTripulação] = useState([])

  const handleAdicionarPirata = (event) => {
    event.preventDefault()
    if (Pirata && Função) {
      setTripulação([...Tripulação, { Pirata, Função }])
      setPirata("")
      setFunção("")
    }
  }

  return (
    <div className="adicionar-Pirata">
      <h2>Adicionar Pirata</h2>
      <form onSubmit={handleAdicionarPirata}>
        <input
          type="text"
          placeholder="Pirata do Pirata"
          value={Pirata}
          onChange={(e) => setPirata(e.target.value)}
        />
        <input
          type="Função"
          placeholder="E-mail do Pirata"
          value={Função}
          onChange={(e) => setFunção(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      <hr />
      <h2>Tripulação Adicionados</h2>

      {Tripulação.length === 0 ? (
        <p className="lista-vazia">Nenhum Pirata adicionado ainda.</p>
      ) : (
        <ul>
          {Tripulação.map((Pirata, index) => (
            <li key={index}>
              <span>{Pirata.Pirata}</span>
              <span className="Pirata-Função">{Pirata.Função}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default AdicionarPirata