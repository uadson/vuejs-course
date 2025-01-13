// Components
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'
import SecondComponent from './components/SecondComponent'

// React Functions
import { useState } from 'react'

// Styles
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1>Components Class 1</h1>
      <FirstComponent />
      <TemplateExpressions />
      <SecondComponent />
    </div>
    </>
  )
}

export default App
