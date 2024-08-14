import { useState } from 'react';
import { Square } from './components/Square.jsx'
import { TURNS } from './constants.jsx';
import { checkWinner, checkEndGame } from './logic/board.js';
import { WinnerModal } from './components/WinnerModal.jsx';
import confetti from "canvas-confetti";
import './App.css'


function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null); // null (no terminó el juego) false (empate)

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  }

  const updateBoard = (index) => {
    // Si la casilla ya está marcada, o si ya hay un ganador no pasa nada
    if (board[index] || winner) {
      return
    }

    // Actualizar la board
    const boardTemp = [...board];
    boardTemp[index] = turn;
    setBoard(boardTemp);

    // Cambiar de turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn); 

    const newWinner = checkWinner(boardTemp);
    if (newWinner) {
      setWinner(newWinner);
      confetti();
    } else if (checkEndGame(boardTemp)) {
      setWinner(false);
    }
  }

  return (
    <main className='board'>
        <h1>Tic Tac Toe</h1>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
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
      
      <WinnerModal winner={winner} resetGame={resetGame}/>
    </main>
  )
}

export default App
