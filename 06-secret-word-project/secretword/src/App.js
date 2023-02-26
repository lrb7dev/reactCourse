//CSS
import './App.css';

//REACT
import {useCallback, useEffect, useState} from "react"

//DATA
import {wordsList} from "./data/words"

//COMPONENTS
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'

//stages
const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id:3, name: "end"}
]

function App() {
  //game progress
  const [gameStage, setGameStage] = useState(stages[0].name)
  //the words
  const[words] = useState(wordsList)
  /* console.log(words) */ //testing

  //start game
  const startGame = () => {
    setGameStage(stages[1].name)
  }

  //process the letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  //restart the game
  const retryGame = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {/* start the respective screen when aims the condition */}
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
      {gameStage === 'end' && <GameOver retryGame={retryGame}/>}
    </div>
  );
}

export default App;
