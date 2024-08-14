import { checkWinner, checkEndGame } from './board.js';
import { TURNS } from '../constants.jsx';
import confetti from "canvas-confetti";

export const updateBoard = (index, board, setBoard, turn, setTurn, winner, setWinner) => {
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