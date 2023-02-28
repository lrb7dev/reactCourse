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
  const[words] = useState(wordsList)
  /* console.log(words) */ //testing

  const [selectedWord, setSelectedWord] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [letters, setLetters] = useState([])

  const[guessedLetters, setGuessedLetters] = useState([])
  const[wrongLetters, setWrongLetters] = useState([])
  const[guesses, setGuesses] = useState(3)
  const[score, setScore] = useState(0)

  const selectWordAndCategory = () => {
    //the categories are the object keys of 'words'
    const categories = Object.keys(words)
    //random category
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    /* console.log(category) */

    //select a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    /* console.log(word) */

    return{word, category}
  }

  //start game
  const startGame = () => {
    //select word and category
    const {word, category} = selectWordAndCategory()
    /* console.log(word, category) */

    //create an array of letters
    let wordLetters = word.split("")
    /* console.log(wordLetters) */
    wordLetters = wordLetters.map((l) => l.toLowerCase())

    console.log(word, category)
    console.log(wordLetters)

    //fill states
    setSelectedWord(word)
    setSelectedCategory(category)
    setLetters(wordLetters)
    console.log(wordLetters)

    setGameStage(stages[1].name)
  }

  //process the letter input
  const verifyLetter = (letter) => {
    /* setGameStage(stages[2].name) */
    console.log(letter)
  }

  //restart the game
  const retryGame = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {/* start the respective screen when aims the condition */}
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && (
        <Game 
          verifyLetter={verifyLetter} 
          selectedWord={selectedWord} 
          selectedCategory={selectedCategory} 
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}  
          />
        )}
      {gameStage === 'end' && <GameOver retryGame={retryGame}/>}
    </div>
  );
}

export default App;
