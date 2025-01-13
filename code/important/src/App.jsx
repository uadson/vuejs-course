// Components
import PublicImages from './components/PublicImages'
import SrcImages from './components/SrcImages'

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        < PublicImages />
        < SrcImages />
      </div>
    </>
  )
}

export default App
