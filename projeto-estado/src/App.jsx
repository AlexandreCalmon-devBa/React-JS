import './App.css'
import AdicionarAluno from './components/AdicionarAluno'
import InfoAluno from './components/infoAluno'
import InfoCurso from './components/infoCurso'

function App() {
  return (
    <div className="app-wrapper">
      <header className="app-header">
        <span className="app-badge">SENAI</span>
        <h1>Turma de Desenvolvimento<br />de ADS</h1>
      </header>

      <main className="app-cards">
        <InfoAluno />
        <InfoCurso />
        <AdicionarAluno />
      </main>
    </div>
  )
}

export default App