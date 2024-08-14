import { useState } from 'react';
import { Square } from './components/Square.jsx'
import { TURNS } from './constants.jsx';
import { updateBoard } from './logic/updateBoard.js';
import { resetGame } from './logic/resetGame.js';
import { WinnerModal } from './components/WinnerModal.jsx';
import './App.css'


function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null); // null (no terminó el juego) false (empate)

  const handleReset = () => {
    resetGame(setBoard, setTurn, setWinner);
  }

  const handleUpdateBoard = (index) => {
    updateBoard(index, board, setBoard, turn, setTurn, winner, setWinner);
  }

  return (
    <main className='board'>
        <h1>Tic Tac Toe</h1>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square key={index} index={index} updateBoard={handleUpdateBoard}>
                {square}
              </Square>
            )
          })
        }
      </section>
      <section className='turn turn-text'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
          </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
          </Square>
      </section>
      
      <WinnerModal winner={winner} resetGame={handleReset}/>
    </main>
  )
}

export default App
