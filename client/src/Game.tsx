import React, {useState} from 'react';

// import axios from 'axios';

const Game = () => {
  const [randomValue, setRandomValue] = useState("")
  const [compRandomValue, setCompRandomValue] = useState<number>()

  const numOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  //returns a random whole number from 0 to 10
  const compChoice = (max: number) => {
    return Math.floor(Math.random() * max)
  }

  const numberCheck = () => {
    console.log("computer choice", compChoice(11))
    console.log("user choice", randomValue)
  }

  return (
    <div className="rand-number">
      Pick a number 0-10! If you choose the same as the comps, you get a surprise!<br/>
      <input type="number" value={randomValue} min="0" max="10" onChange={(e) => setRandomValue(e.target.value)}></input>
      <button onClick={() => {numberCheck()}}>Submit</button>
    </div>
  )
}

export default Game;