import { useEffect, useState } from "react";
import confetti from "canvas-confetti"
import { Square } from "./components/square";
import { TURNS } from "./constants";
import { checkWinnerFrom, checkEndGame} from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";
import { resetGameInStorage, saveGameToStorage } from "./logic/storage/storageManager";



function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X});
  //null sin ganador false empate
  const [winner, setWinner] = useState(null);


  const resetGame = () => {

    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameInStorage()

  }
 

  const updateBoard = (index) => {

    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X;

    setTurn(newTurn);

    saveGameToStorage({
      board: newBoard, 
      turn: newTurn
    })

    const newWinner = checkWinnerFrom(newBoard);

    if (newWinner) {
      confetti()
      setWinner(newWinner);
      // TODO: check if the game is over
    } else if (checkEndGame(newBoard)) {

      setWinner(false)

    }

  };

  useEffect(()=>{
    console.log("use effect")
  })

  return (
    <main className="board">
      <h1></h1>
      <button onClick={resetGame}>
                Reset
              </button>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn == TURNS.X}>{TURNS.X}</Square>

        <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
      </section> 
        <WinnerModal winner={winner} resetGame={resetGame}></WinnerModal>
      </main>
  );
}

export default App;
