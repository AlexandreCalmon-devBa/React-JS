import './App.css'
import AdicionarPirata from './components/AdicionarPirata'
import InfoPirata from './components/infoPirata'
import InfoCurso from './components/infoCurso'

function App() {
  return (
    <div className="app-wrapper">
      <header className="app-header">
        <span className="app-badge">SENAI</span>
        <h1>Turma de Desenvolvimento<br />de ADS</h1>
      </header>

      <main className="app-cards">
        <InfoPirata />
        <InfoCurso />
        <AdicionarPirata />
      </main>
    </div>
  )
}

export default App