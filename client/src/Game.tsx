import React, { useState } from "react";
import NavBar from "./NavBar";
// import axios from 'axios';

import congrats from "./img/Congratulations.png";

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
  };

  return (
    <div>
      <NavBar />
      <div className="rand-number">
        <h1>Beat the Computer Series</h1>
        <h2>Random Number</h2>
        Pick a number 0-10! If you choose the same as the comps, you get a
        congratulations!
        <br />
        <div style={{display: "flex", justifyContent: "center", paddingTop: "10px", paddingBottom: "10px"}}>
          <input
            type="number"
            value={randomValue}
            onChange={(e) => {
              setRandomValue(parseInt(e.target.value));
              setIsCorrectValue(false);
              setIsWrongValue(false);
            }}
            style={{width:"60px", borderColor:"#FF928B"}}
          ></input>
          <button className="btn btn-outline-primary"
            onClick={() => {
              numberCheck();
            }}
          >
            Submit
          </button>
        </div>
        <div className="congrats-container">
          {isCorrectValue ? (
            <img
              className="congrats"
              src={congrats}
              width="40%"
              alt="congrats"
            />
          ) : null}
          {isWrongValue ? <h3> YIKES, TRY AGAIN</h3> : null}
        </div>
        <div>
          <h2>Tic Tac Toe</h2>
        </div>
      </div>
    </div>
  );
};

export default Game;
