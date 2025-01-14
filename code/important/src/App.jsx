// Components
import PublicImages from './components/PublicImages'
import SrcImages from './components/SrcImages'
import Hooks from './components/Hooks'
import ListsRendering from './components/ListsRendering'
import ConditionalRender from './components/ConditionalRender'
import Props from './components/Props'

// Styles
import './App.css'

// Main
function App() {
  
  // Props
  const username = "Foo bar"

  return (
    <>
      <div>
        < PublicImages />
        < SrcImages />
        < Hooks />
        < ListsRendering />
        < ConditionalRender />
        < Props username={username}/>
      </div>
    </>
  )
}

export default App
