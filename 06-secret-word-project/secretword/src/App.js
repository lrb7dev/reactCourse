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


  return (
    <div className="App">
      {/* start the respective screen when aims the condition */}
      {gameStage === 'start' && <StartScreen/>}
      {gameStage === 'game' && <Game/>}
      {gameStage === 'end' && <GameOver/>}
    </div>
  );
}

export default App;
