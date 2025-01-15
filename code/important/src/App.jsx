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
  const car = [
    {
      "brand": "Tesla",
      "km": 10000,
      "color": "Azul",
      "status": false
    },
    {
      "brand": "BYD",
      "km": 0,
      "color": "Branco",
      "status": true
    },
    {
      "brand": "GWM",
      "km": 1000,
      "color": "Cinza",
      "status": false
    },
    {
      "brand": "GM",
      "km": 0,
      "color": "Vermelho",
      "status": true
    },
  ]

  return (
    <>
      <div>
        < PublicImages />
        < SrcImages />
        < Hooks />
        < ListsRendering />
        < ConditionalRender />
        < Props username={username}/>
        < DestructuringProps brand={car[0].brand} km={car[0].km} color={car[0].color} newCar={car[0].status}/>
        {/* Component reuse */}
        < DestructuringProps brand={car[1].brand} km={car[1].km} color={car[1].color} newCar={car[1].status}/>
        < DestructuringProps brand={car[2].brand} km={car[2].km} color={car[2].color} newCar={car[2].status}/>
        < DestructuringProps brand={car[3].brand} km={car[3].km} color={car[3].color} newCar={car[3].status}/>

      </div>
    </>
  )
}

export default App
