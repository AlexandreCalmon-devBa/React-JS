import { useState } from 'react'
import './style.css'

function AdicionarAluno() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [alunos, setAlunos] = useState([])

  const handleAdicionarAluno = (event) => {
    event.preventDefault()
    if (nome && email) {
      setAlunos([...alunos, { nome, email }])
      setNome("")
      setEmail("")
    }
  }

  return (
    <div className="adicionar-aluno">
      <h2>Adicionar Aluno</h2>
      <form onSubmit={handleAdicionarAluno}>
        <input
          type="text"
          placeholder="Nome do aluno"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-mail do aluno"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      <hr />
      <h2>Alunos Adicionados</h2>

      {alunos.length === 0 ? (
        <p className="lista-vazia">Nenhum aluno adicionado ainda.</p>
      ) : (
        <ul>
          {alunos.map((aluno, index) => (
            <li key={index}>
              <span>{aluno.nome}</span>
              <span className="aluno-email">{aluno.email}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default AdicionarAluno