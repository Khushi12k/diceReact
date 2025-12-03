import React, { useState } from 'react'
import dice1 from "./assets/dice1.jpg"
import dice2 from "./assets/dice2.jpg"
import dice3 from "./assets/dice3.jpg"
import dice4 from "./assets/dice4.jpg"
import dice5 from "./assets/dice5.jpg"
import dice6 from "./assets/dice6.jpg"
import question from "./assets/question.jpg"

const App = () => {
  const images = [dice1, dice2, dice3, dice4, dice5, dice6]

  const [currentImage, setCurrentImage] = useState(question)
  const [score, setScore] = useState(0)
  const [rolledNumbers, setRolledNumbers] = useState([]) 

  function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    setCurrentImage(images[randomNumber - 1])
    setScore(oldScore => oldScore + randomNumber)
    setRolledNumbers(prev => [...prev, randomNumber]) 
  }
  function undoRoll() {
    if (!rolledNumbers.length) return 

    const newRolled = rolledNumbers.slice(0, -1)
    setRolledNumbers(newRolled)
    setCurrentImage(
      newRolled.length ? images[newRolled[newRolled.length - 1] - 1] : question
    )
  }


  const numbers = []
  for (let i = 1; i <= 100; i++) {
    numbers.push(
      <p key={i} className={rolledNumbers.includes(i) ? 'highlight' : ''} >  {i}</p>
    )
  }

  return (
    <>
      <h2>Score: {score}</h2>

      <div className='diceNumber'>
        {numbers}
      </div>

      <img src={currentImage} alt="Dice" />

      <button className='diceBtn' onClick={rollDice}>Click Here</button>
      <button className='diceBtn' onClick={undoRoll}>Undo</button>
    </>
  )
}

export default App


