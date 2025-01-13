// Components
import PublicImages from './components/PublicImages'

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        < PublicImages />
      </div>
    </>
  )
}

export default App
