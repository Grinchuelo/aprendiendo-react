import { TURNS } from "../constants";

export function resetGame (setBoard, setTurn, setWinner) {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);  
}