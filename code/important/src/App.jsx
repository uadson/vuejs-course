// Components
import PublicImages from './components/PublicImages'
import SrcImages from './components/SrcImages'
import Hooks from './components/Hooks'
import ListsRendering from './components/ListsRendering'
import ConditionalRender from './components/ConditionalRender'

// Styles
import './App.css'

// Main
function App() {
  
  return (
    <>
      <div>
        < PublicImages />
        < SrcImages />
        < Hooks />
        < ListsRendering />
        < ConditionalRender />
      </div>
    </>
  )
}

export default App
