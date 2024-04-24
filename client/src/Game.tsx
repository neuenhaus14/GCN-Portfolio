/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";

import congrats from "./img/Congratulations.png";


const Game = () => {
  const [randomValue, setRandomValue] = useState<number>(0);
  const [isCorrectValue, setIsCorrectValue] = useState<boolean>();
  const [isWrongValue, setIsWrongValue] = useState<boolean>();
  const [userPlayer, setUserPlayer] = useState<string>("");
  const [compPlayer, setCompPlayer] = useState<string>("");
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

  const TicTacToe = () => {
    const [gameArray, setGameArray] = useState(Array(9).fill(null));
    const [compTurn, setCompTurn] = useState<boolean>(false);
  


    interface SquareProps {
      value: any
      onSquareClick: any
    }

    const Square: React.FC<SquareProps>= ({value, onSquareClick}) => {
      
      return (
        <button className="square" onClick={onSquareClick} value={value}>
          {value} 
        </button>
      );
    }

    const winningPlay = () => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (gameArray[a] && gameArray[a] === gameArray[b] && gameArray[a] === gameArray[c]) {
         return gameArray[a];
          // return true;
        }
      }
      return false;
    }


    const getAllAvalilableMoves = (board: any) => {
      return board.filter((move: string) => move !== "O" && move !== "X")
    }

    const minimaxAlg = (newBoard: any, player: string ) => {
      let availMoves = getAllAvalilableMoves(newBoard);
      
      if (winningPlay() === userPlayer ){
        return { index: -1, score: -10 };
      } else if (winningPlay() === compPlayer) {
        return { index: -1, score: 10 };
      } else if (availMoves.length === 0) {
        return { index: -1, score: 0 };
      }

      let moves = [];
      
      for (let i = 0; i < availMoves.length; i++){
        let move = { index: -1, score: 0 }
        move.index = newBoard[availMoves[i]];
        newBoard[availMoves[i]] = player

        if (player === userPlayer){
          let result = minimaxAlg(newBoard, userPlayer);
          move.score = result.score;
        } else {
          let result = minimaxAlg(newBoard, compPlayer);
          move.score = result.score;
        }

        //newBoard[availMoves[i]] = null;
        newBoard[availMoves[i]] = move.index;
        moves.push(move);
      }

      let bestMove = 0;
      if(player === userPlayer){
        var bestScore = -10000;
        for(let i = 0; i < moves.length; i++){
          if(moves[i].score > bestScore){
            bestScore = moves[i].score;
            bestMove = i;
          }
        }
      }else {
        let bestScore = 10000;
        for(let i = 0; i < moves.length; i++){
          if(moves[i].score < bestScore){
            bestScore = moves[i].score;
            bestMove = i;
          }
        }
      }

      return moves[bestMove];      
    }


    // the only person clicking is the player, that is the value
    const handleClick = (index: number) => {
     
      if (!compTurn && !winningPlay()){  
        const updatedGameArray = [...gameArray];
        updatedGameArray[index] = userPlayer;
        setGameArray(updatedGameArray);
        setCompTurn(true); 
        handleCompPlay();

      } else {
        console.log('not your turn!!!!!!')
        
      }
    }

    const handleCompPlay = () => {
      console.log("function hit", compTurn)
      
        setCompTurn(false);
        let result = minimaxAlg(gameArray, compPlayer)
        console.log("result", result);
        
        const updatedGameArray = [...gameArray];
        updatedGameArray[result.index] = compPlayer;
        setGameArray(updatedGameArray);

    
  }
  
    return (
      <div>
      <div className="status">status</div>
      <div className="board-row">
        <Square value={gameArray[0]} onSquareClick={() => handleClick(0)} />
        <Square value={gameArray[1]} onSquareClick={() => handleClick(1)} />
        <Square value={gameArray[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={gameArray[3]} onSquareClick={() => handleClick(3)} />
        <Square value={gameArray[4]} onSquareClick={() => handleClick(4)} />
        <Square value={gameArray[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={gameArray[6]} onSquareClick={() => handleClick(6)} />
        <Square value={gameArray[7]} onSquareClick={() => handleClick(7)} />
        <Square value={gameArray[8]} onSquareClick={() => handleClick(8)} />
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
        <h5><button onClick={() => {setUserPlayer("X"); setCompPlayer("O"); setIsPlayerSelected(true); setShowBoard(true)}}>X</button> OR <button onClick={() => {setUserPlayer("O"); setCompPlayer("X"); setIsPlayerSelected(true); setShowBoard(true)}}>O</button></h5>
          <div>
            {isPlayerSelected ? (userPlayer === "X" ? `${`Mmm, if you think that will help... Okay! Let's play`}` : `${`Oh... interesting choice. Okay! Let's play.`}` ) : null}
            {showBoard ?
            (<div className="board">
              <p>You know the rules; go ahead- you first</p>
              <TicTacToe />
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
