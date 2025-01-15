// Components
import PublicImages from './components/PublicImages'
import SrcImages from './components/SrcImages'
import Hooks from './components/Hooks'
import ListsRendering from './components/ListsRendering'
import ConditionalRender from './components/ConditionalRender'
import Props from './components/Props'
import DestructuringProps from './components/DestructuringProps'
import Fragments from './components/Fragments'

// Styles
import './App.css'
import { Fragment } from 'react'

// Main
function App() {
  
  // Props
  const username = "Foo bar"

  // Car detail
  const cars = [
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
        < DestructuringProps brand={cars[0].brand} km={cars[0].km} color={cars[0].color} newCar={cars[0].status}/>
        {/* Component reuse */}
        < DestructuringProps brand={cars[1].brand} km={cars[1].km} color={cars[1].color} newCar={cars[1].status}/>
        < DestructuringProps brand={cars[2].brand} km={cars[2].km} color={cars[2].color} newCar={cars[2].status}/>
        < DestructuringProps brand={cars[3].brand} km={cars[3].km} color={cars[3].color} newCar={cars[3].status}/>
        {/* Component reuse with loop */}
        {cars.map((car) => (
          < DestructuringProps brand={car.brand} km={car.km} color={car.color} newCar={car.status}/>
        ))}
        < Fragments propFragment="Test"/>
      </div>
    </>
  )
}

export default App
