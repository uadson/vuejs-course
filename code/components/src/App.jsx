// Components
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'
import SecondComponent from './components/SecondComponent'
import Events from './components/Events'

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
      <Events />
    </div>
    </>
  )
}

export default App
