// Components
import PublicImages from './components/PublicImages'
import SrcImages from './components/SrcImages'
import Hooks from './components/Hooks'
import ListsRendering from './components/ListsRendering'
import ConditionalRender from './components/ConditionalRender'
import Props from './components/Props'
import DestructuringProps from './components/DestructuringProps'

// Styles
import './App.css'

// Main
function App() {
  
  // Props
  const username = "Foo bar"

  // Car detail
  const car = {
    "brand": "Tesla",
    "km": 10000,
    "color": "Azul"
  }

  return (
    <>
      <div>
        < PublicImages />
        < SrcImages />
        < Hooks />
        < ListsRendering />
        < ConditionalRender />
        < Props username={username}/>
        < DestructuringProps brand={car.brand} km={car.km} color={car.color}/>
      </div>
    </>
  )
}

export default App
