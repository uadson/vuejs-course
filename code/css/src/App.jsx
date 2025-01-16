// Hooks
import { useState } from 'react'

// Styles
import './App.css'

// Components
import CssComponent from './components/CssComponent'
import CssModules from './components/CssModules'


function App() {

  const [addValue, setValue] = useState(0)

  const [fooClass, setFooClass] = useState(true)

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

      {/** CSS Classe dinâmica */}
      <div>
        <p className={fooClass ? "foo-class" : "bar-class"}>
          Este parágrafo contém estilos que foram atribuídos por uma classe dinâmica
        </p>
        <button onClick={() => setFooClass(fooClass ? false : true)}>Alterar cor</button>
      </div>

      {/** CSS Modules */}
      <CssModules />

      
    </div>
  )
}

export default App
