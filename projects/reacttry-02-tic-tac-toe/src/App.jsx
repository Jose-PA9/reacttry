import { useState } from "react";
import confetti from "canvas-confetti"
import { Square } from "./components/square";
import { TURNS } from "./constants";
import { checkWinnerFrom, checkEndGame} from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";



function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  console.log(board);
  const [turn, setTurn] = useState(TURNS.X);
  //null sin ganador false empate
  const [winner, setWinner] = useState(null);


  const resetGame = () => {

    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

  }
 

  const updateBoard = (index) => {
    console.dir("updating");
    if (board[index] || winner) return;
    console.dir("changing");

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    console.dir("turning");

    const newWinner = checkWinnerFrom(newBoard);

    if (newWinner) {
      confetti()
      setWinner(newWinner);
      // TODO: check if the game is over
    } else if (checkEndGame(newBoard)) {


      setWinner(false)
    }

  };



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
