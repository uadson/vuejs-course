// Components
import PublicImages from './components/PublicImages'
import SrcImages from './components/SrcImages'
import Hooks from './components/Hooks'

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        < PublicImages />
        < SrcImages />
        < Hooks />
      </div>
    </>
  )
}

export default App
