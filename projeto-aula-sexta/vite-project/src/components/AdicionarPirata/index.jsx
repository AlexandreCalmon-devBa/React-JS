import { useState } from 'react'
import './style.css'

function AdicionarPirata() {
  const [Pirata, setPirata] = useState("")
  const [Função, setFunção] = useState("")
  const [Tripulação, setTripulação] = useState([])
  const [Buscando, setBuscando] = useState(false) // Para avisar que está carregando

  const handleAdicionarPirata = async (event) => {
    event.preventDefault()
    
    if (Pirata && Função) {
      setBuscando(true) // Ativa o aviso de "carregando"
      
      try {
        // Faz a busca na API do MyAnimeList pelo nome do personagem
        const resposta = await fetch(`https://api.jikan.moe/v4/characters?q=${Pirata}&order_by=favorites&sort=desc&limit=1`)
        const dados = await resposta.json()
        
        // Se a API achar o personagem, pega a imagem. Se não, usa uma imagem padrão.
        let imagemUrl = "https://via.placeholder.com/100x150?text=Sem+Foto"
        if (dados.data && dados.data.length > 0) {
          imagemUrl = dados.data[0].images.webp.image_url
        }

        // Salva na lista o Nome, Função e a Imagem que veio da API
        setTripulação([...Tripulação, { Pirata, Função, imagem: imagemUrl }])
        setPirata("")
        setFunção("")
      } catch (erro) {
        console.error("Erro ao buscar na Grand Line:", erro)
        alert("Erro ao buscar a imagem do pirata!")
      } finally {
        setBuscando(false) // Desativa o aviso de "carregando"
      }
    }
  }

  return (
    <div className="adicionar-Pirata">
      <h2>Recrutar Pirata</h2>
      <form onSubmit={handleAdicionarPirata}>
        <input
          type="text"
          placeholder="Nome (Ex: Zoro, Nami, Sanji)"
          value={Pirata}
          onChange={(e) => setPirata(e.target.value)}
        />
        <input
          type="text"
          placeholder="Função (Ex: Espadachim)"
          value={Função}
          onChange={(e) => setFunção(e.target.value)}
        />
        <button type="submit" disabled={Buscando}>
          {Buscando ? "Buscando..." : "Adicionar ao Bando"}
        </button>
      </form>

      <hr />
      <h2>Tripulação Atual</h2>

      {Tripulação.length === 0 ? (
        <p className="lista-vazia">Nenhum pirata recrutado ainda.</p>
      ) : (
        <ul className="lista-tripulacao">
          {Tripulação.map((pirataCadastrado, index) => (
            <li key={index} className="pirata-item">
              <img 
                src={pirataCadastrado.imagem} 
                alt={pirataCadastrado.Pirata} 
                className="pirata-avatar"
              />
              <div className="pirata-info">
                <strong>{pirataCadastrado.Pirata}</strong> 
                <span>{pirataCadastrado.Função}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default AdicionarPirata