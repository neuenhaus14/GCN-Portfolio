import React, { useState } from "react";
import NavBar from "./NavBar";
// import axios from 'axios';

const Game = () => {
  const [randomValue, setRandomValue] = useState<number>(0);
  const [isCorrectValue, setIsCorrectValue] = useState<boolean>();
  const [isWrongValue, setIsWrongValue] = useState<boolean>();

  //returns a random whole number from 0 to 10
  const compChoice = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  const numberCheck = () => {
    const compRandomValue = compChoice(11);
    if (randomValue <= 10) {
      if (compRandomValue === randomValue) {
        console.log("yay");
        setIsCorrectValue(true);
        setIsWrongValue(false);
      } else {
        console.log("try again");
        setIsWrongValue(true);
        setIsCorrectValue(false);
      }
    }
    console.log("computer choice", compRandomValue);
    console.log("user choice", randomValue);
  };

  return (
    <div>
      <NavBar />
      <div className="rand-number">
        <h1>Beat the Computer Series</h1>
        <h2>Random Number</h2>
        Pick a number 0-10! If you choose the same as the comps, you get a
        surprise!
        <br />
        <input
          type="number"
          value={randomValue}
          onChange={(e) => setRandomValue(parseInt(e.target.value))}
        ></input>
        <button
          onClick={() => {
            numberCheck();
          }}
        >
          Submit
        </button>
        {isCorrectValue ? <p>CONGRATS!</p> : null}
        {isWrongValue ? <p>YIKES, TRY AGAIINNNN!</p> : null}
        {/* <h2>Tic Tac Toe</h2> */}

        
      </div>
    </div>
  );
};

export default Game;
