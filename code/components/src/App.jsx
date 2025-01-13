// Components
import FirstComponent from './components/FirstComponent'


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
    </div>
    </>
  )
}

export default App
