import { WINNER_COMBOS } from "../constants";

export const checkWinner = (boardToCheck) => {
    // Chekeamos todas las combinaciones
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;

      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        // Devolver el ganador si es que lo hay
        return boardToCheck[a];
      }
    }
    // El juego todavia no termina
    return null;
  }

export const checkEndGame = (boardTemp) => {
  return boardTemp.every((cell) => cell !== null);
}
