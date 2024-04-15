import React, { useState } from "react";

import congrats from "./img/Congratulations.png";

const Game = () => {
  const [randomValue, setRandomValue] = useState<number>(0);
  const [isCorrectValue, setIsCorrectValue] = useState<boolean>();
  const [isWrongValue, setIsWrongValue] = useState<boolean>();
  const [player, setPlayer] = useState<string>("");
  const [isPlayerSelected, setIsPlayerSelected] = useState<boolean>(false);
  const [showBoard, setShowBoard] = useState<boolean>(false);

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
      <h1>Beat the Computer Series</h1>
      <div id="rand-number" className="container-sm">
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
      </div>
      <div id="tic-tac-toe"  className="container-sm">
        <h1>Tic Tac Toe</h1>
        <h2>You're up against me! The computer. Think you can win...? I'd like to see you try :)</h2>
        <h2>Choose your fighter: </h2>
        <h5><button onClick={() => {setPlayer("X"); setIsPlayerSelected(true)}}>X</button> OR <button onClick={() => {setPlayer("O"); setIsPlayerSelected(true)}}>O</button></h5>
          <div>
            {isPlayerSelected ? (player === "X" ? `${`Mmm, if you think that will help... Okay! Let's play`}` : `${`Oh... interesting choice. Okay! Let's play.`}` ) : null}
          </div>
          <div>
            {showBoard ? <p>ADD THE BOARD</p>: null}
              
          </div>
      </div>
    </div>
  );  
};

export default Game;
