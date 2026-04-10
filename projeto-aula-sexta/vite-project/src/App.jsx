import './App.css'
import AdicionarPirata from './components/AdicionarPirata'
import InfoPirata from './components/InfoIntegrante'
import InfoTripulação from './components/InfoBandoPirata'

// 1. IMPORTAÇÃO DA IMAGEM: Adicione esta linha aqui em cima!
import logoOp from './assets/logo_op.png'

function App() {
  return (
    <div className="app-wrapper">
      <header className="app-header">
        
        {/* 2. USO DA IMAGEM: Coloque a variável {logoOp} dentro das chaves, sem aspas! */}
        <img 
          src={logoOp} 
          alt="Logo One Piece" 
          className="one-piece-logo"
        />
        
        <br />
        <span className="app-badge">SENAI - GRAND LINE</span>
        <h1>Bando de Piratas<br />Desenvolvedores</h1>
      </header>

      <main className="app-cards">
        <AdicionarPirata/>
        <InfoPirata/>
        <InfoTripulação/>    
      </main>
    </div>
  )
}

export default App