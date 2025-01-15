// Components
import PublicImages from './components/PublicImages'
import SrcImages from './components/SrcImages'
import Hooks from './components/Hooks'
import ListsRendering from './components/ListsRendering'
import ConditionalRender from './components/ConditionalRender'
import Props from './components/Props'
import DestructuringProps from './components/DestructuringProps'
import Fragments from './components/Fragments'
import ChildrenProps from './components/ChildrenProps'
import ExecutionFunction from './components/ExecutionFunction'
import Message from './components/Message'
import ChangeMessageStage from './components/ChangeMessageStage'

// Hooks
import { useState } from 'react'

// Styles
import './App.css'

// Main
function App() {
  
  // Props
  const username = "Foo bar"

  // Car detail
  const cars = [
    {
      "id": 1,
      "brand": "Tesla",
      "km": 10000,
      "color": "Azul",
      "status": false
    },
    {
      "id": 2,
      "brand": "BYD",
      "km": 0,
      "color": "Branco",
      "status": true
    },
    {
      "id": 3,
      "brand": "GWM",
      "km": 1000,
      "color": "Cinza",
      "status": false
    },
    {
      "id": 4,
      "brand": "GM",
      "km": 0,
      "color": "Vermelho",
      "status": true
    },
  ]

  // Function like a prop
  function showMessage() {
    document.querySelector("#msg").innerHTML = "Esta é uma função que declarada em um props"
  }

  // State lift
  const [message, setMessage] = useState(" ")

  const handleMessage = (msg) => {
    setMessage(msg)
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
        < DestructuringProps brand={cars[0].brand} km={cars[0].km} color={cars[0].color} newCar={cars[0].status}/>
        {/* Component reuse */}
        < DestructuringProps brand={cars[1].brand} km={cars[1].km} color={cars[1].color} newCar={cars[1].status}/>
        < DestructuringProps brand={cars[2].brand} km={cars[2].km} color={cars[2].color} newCar={cars[2].status}/>
        < DestructuringProps brand={cars[3].brand} km={cars[3].km} color={cars[3].color} newCar={cars[3].status}/>
        {/* Component reuse with loop */}
        {cars.map((car) => (
          < DestructuringProps key={car.id} brand={car.brand} km={car.km} color={car.color} newCar={car.status}/>
        ))}
        < Fragments propFragment="Test"/>
        < ChildrenProps propTest="Qualquer valor">
          <p>Aqui é o conteúdo</p>
        </ChildrenProps >
        < ExecutionFunction showMessage={showMessage}/>
        < Message message={message}/>
        < ChangeMessageStage handleMessage={handleMessage}/>
      </div>
    </>
  )
}

export default App
