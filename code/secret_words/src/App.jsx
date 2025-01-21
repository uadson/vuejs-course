//HOOKS
import { useCallback, useEffect, useState } from 'react'

// COMPONENTS
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'

//CSS
import './App.css'

//DATA
import { wordsList } from './data/words'

// Game stages
const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)
  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])
  
  const pickedWordAndCategory = () => {
    // pick a random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    // pick a random word
    const word = words[category][Math.floor(Math.random() * Object.keys(words[category]).length)]
    
    return {word, category}
  }

  // Start game
  const startGame = () => {
    // pick word and category
    const {word, category} = pickedWordAndCategory()
    
    // split word
    let wordSplit = word.split("")
    wordSplit = wordSplit.map((letter) => letter.toLowerCase())
    
    // fill states
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(letters)
    
    setGameStage(stages[1].name)
    console.log(`Categoria: ${category} - Palavra: ${word}`)
    console.log(`Word Split: ${wordSplit}`)
  }

  // Process input
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  // Restart the game
  const retry = () => {
    setGameStage(stages[0].name)
  }

  return (
    <>
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter}/>}
      {gameStage === 'end' && <GameOver retry={retry}/>}
    </>
  )
}

export default App
