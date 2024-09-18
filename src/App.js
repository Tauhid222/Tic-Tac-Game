import { useEffect, useState } from 'react';
import './App.css';
import Square from './component/Square';
import { Patterns } from './component/Patterns';
import { Tune } from '@mui/icons-material';

function App() {
  
  const [board, setBoard] = useState(["","","","","","","","",""]);
  const [player, setPlayer] = useState("X");
  const [result,setresult] = useState({winner: "none",state:"none"})

  useEffect(()=>{
    cheakWin()
    cheakIfTie()
    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
 
  },[board])
  useEffect(()=>{
    if(result.state!="none"){
      alert(`Game Finshead Winning Player: ${result.winner}`)
      restartGame()
    }
   
  },[result])

  const chooseSquare = (square) => {
    setBoard(board.map((val, idx) => {
      if (idx === square && val === "") {
        return player;
      }
      return val;
    }));

   
  };



  const cheakWin =()=>{
    Patterns.forEach((curPatterns )=>{
      const firstPlayer = board[curPatterns[0]];
      if(firstPlayer=="") return;
      let founWinnungPattern = true;
      curPatterns.forEach((idx)=>{
        if(board[idx]!= firstPlayer){
          founWinnungPattern = false
        }
      })
      if(founWinnungPattern ){
    setresult({winner :player,state:"won"})
      }
    })
  }

  const cheakIfTie =()=>{
    let filled = true
    board.forEach((square)=>{
      if(square==""){
        filled = false
      }
    })
    if(filled){
      setresult({winner:"No One",state:"Tie"})
    }
  }
  const restartGame =()=>{
    setBoard(["","","","","","","","",""])
    setPlayer("O")
  }

  return (
    <> 
    <h1 className='h1one'>Tic Tac Toe Game PlayNow</h1>
      <div className='App'>
          
        <div className='board'>
          <div className="row">
            <Square val={board[0]} chooseSquare={() => chooseSquare(0)} />
            <Square val={board[1]} chooseSquare={() => chooseSquare(1)} />
            <Square val={board[2]} chooseSquare={() => chooseSquare(2)} />
          </div>
          <div className="row">
            <Square val={board[3]} chooseSquare={() => chooseSquare(3)} />
            <Square val={board[4]} chooseSquare={() => chooseSquare(4)} />
            <Square val={board[5]} chooseSquare={() => chooseSquare(5)} />
          </div>
          <div className="row">
            <Square val={board[6]} chooseSquare={() => chooseSquare(6)} />
            <Square val={board[7]} chooseSquare={() => chooseSquare(7)} />
            <Square val={board[8]} chooseSquare={() => chooseSquare(8)} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;