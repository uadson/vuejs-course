// Hooks
import { useState } from 'react'

// Styles
import './App.css'

// Components
import CssComponent from './components/CssComponent'


function App() {

  const [addValue, setValue] = useState(0)

  return (
    <div>
      <h1>React with CSS</h1>
    
      {/** Css de Component */}
      <CssComponent />
      <p>Este parágrafo é do App.jsx</p>

      {/** CSS Inline */}
      <p style={{
        color: "#391463", 
        backgroundColor: "#ECCE0D",
        padding: "25px"
      }}>
        Este parágrafo contém estilos que foram atribuídos de modo inline
      </p>

      {/** CSS Inline dinâmico */}
      <div>
        <p style={addValue > 3 ? ({backgroundColor: "#2D936C"}):({backgroundColor: "#5FAD41"})}>
          Este parágrafo contém estilos que foram atribuídos de modo inline dinâmico
        </p>
        <p>{addValue}</p>
        <button onClick={() => setValue(addValue + 1)}>+</button>
        <button onClick={() => setValue(addValue - 1)}>-</button>
      </div>
      
    </div>
  )
}

export default App
