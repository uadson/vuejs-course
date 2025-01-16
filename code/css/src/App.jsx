// Styles
import './App.css'

// Components
import CssComponent from './components/CssComponent'


function App() {

  return (
    <div>
      <h1>React with CSS</h1>
    
      {/** Css de Component */}
      <CssComponent />
      <p>Este parágrafo é do App.jsx</p>

      {/** Inline CSS */}
      <p style={{
        color: "#391463", 
        backgroundColor: "#ECCE0D",
        padding: "25px"
      }}>
        Este parágrafo contém estilos que foram atribuídos de modo inline
      </p>
    </div>
  )
}

export default App
