import React, { useState } from "react";

import congrats from "./img/Congratulations.png";
import { toHaveAccessibleErrorMessage } from "@testing-library/jest-dom/matchers";

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


  class Queue<T> implements Queue<T> {
    public storage: T[] = [];
    constructor(private capacity: number = Infinity){}

    enqueue(element: T): void {
      if (this.size() === this.capacity){
        throw Error("Queue has reached max capacity")
      }
      this.storage.push(element);
    }

    dequeue(): T | undefined{
      return this.storage.shift();
    }

    size(): number {
      return this.storage.length;
    }

    peek() {
      return this.storage[this.storage.length - 1];
    }
  }

  const aQueue = new Queue<number>();
  const bQueue = new Queue<number>();

  const Elevator = () => {

    // const [aActive, setAActive] = useState<boolean>(false);
    // const [bActive, setBActive] = useState<boolean>(false);
    const [showAFloors, setShowAFloors] =useState<boolean>(false);
    const [showBFloors, setShowBFloors] =useState<boolean>(false);

    const floors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
    const callElevator = (direction: string, floor: number) => {
      // if (direction === "up") {
      //   setADirection(true)
      // } else {
      //   setBDirection(true)
      // }

      console.log("inside callElevator: direction and rando floor", direction, floor)

      let aSize = aQueue.size();
      let bSize = bQueue.size();

      console.log("storageSizes:", aSize, bSize);

      if (aSize < bSize) { 
        aQueue.enqueue(floor);
        setShowAFloors(true);
        console.log('added floor to aQueue', aQueue.storage)
      } else if (aSize > bSize){
        bQueue.enqueue(floor);
        setShowBFloors(true);
        console.log('added floor to bQueue', bQueue.storage)
      } else{ // if they are the same length
        let aLastFloor = aQueue.peek();
        let bLastFloor = bQueue.peek();

        console.log("aLastFloor and bLastFloor:", aLastFloor, bLastFloor)
        console.log('difference btw the two:', (floor - aLastFloor), (floor - bLastFloor) )
        if ((floor - aLastFloor) <= (floor - bLastFloor)) {
          aQueue.enqueue(floor);
          setShowAFloors(true);
          console.log('added floor to aQueue', aQueue.storage)
        } else {
          bQueue.enqueue(floor);
          setShowBFloors(true);
          console.log('added floor to bQueue', bQueue.storage)
        }
      } 
    }

    const selectFloor = (selectedFloor: number, elevator: string) => {
      console.log("selectedFloor and elevator", selectedFloor, elevator)

      if (elevator === "A") {
        aQueue.enqueue(selectedFloor);
        setShowAFloors(false);
        console.log('added floor to aQueue', aQueue.storage)
      } else {
        bQueue.enqueue(selectedFloor)
        setShowBFloors(false);
        console.log('added floor to bQueue', bQueue.storage)
      }
    }

    return (
      <div>
        <div>
          <button onClick={() => callElevator("up", compChoice(11))}> Up Button</button> 
          <button onClick={() => callElevator("down", compChoice(11))}> Down Button</button> 
        </div>
        <div>
          {showAFloors && floors.map((floor, key) => (
            <div>
              {key}
              <p>Great, you're in Elevator A</p>
              <button onClick={() => selectFloor(floor, "A") }>{floor} Floor</button> 
            </div>
          ))}
          {showBFloors && floors.map((floor, key) => (
            <div>
              {key}
              <p>Great, you're in Elevator B</p>
              <button onClick={() => selectFloor(floor, "B") }>{floor} Floor</button> 
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div>
      <h1>Beat the Computer Series</h1>
      <div id="elevator" className="container-sm">
        <h2>This is the Elevator Simulation</h2>
        <Elevator/>
      </div>
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
        <h5><button onClick={() => {setPlayer("X"); setIsPlayerSelected(true); setShowBoard(true)}}>X</button> OR <button onClick={() => {setPlayer("O"); setIsPlayerSelected(true); setShowBoard(true)}}>O</button></h5>
          <div>
            {isPlayerSelected ? (player === "X" ? `${`Mmm, if you think that will help... Okay! Let's play`}` : `${`Oh... interesting choice. Okay! Let's play.`}` ) : null}
            {showBoard ?
            (<div className="board">
              <p>You know the rules; let's go</p>
            </div>
            ) : null}
          </div>
          <div>
              
          </div>
      </div>
    </div>
  );  
};

export default Game;
