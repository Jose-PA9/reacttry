import { WINNER_COMBOS } from "../constants";

export const checkWinnerFrom = (boardToCheck) => {
    console.dir("changin");

    for (const combo of WINNER_COMBOS) {
      console.dir("iterating");

      const [a, b, c] = combo;
      console.dir(boardToCheck[a]);
      console.dir(boardToCheck[b]);
      console.dir(boardToCheck[c]);
      if (
        boardToCheck[a] &&
        boardToCheck[a] == boardToCheck[b] &&
        boardToCheck[a] == boardToCheck[c]
      ) {
        console.dir(
          "winner",
          boardToCheck[a],
          boardToCheck[b],
          boardToCheck[c]
        );
        return boardToCheck[a];
      }
    }

    return null;
  };

  export const checkEndGame = (newBoard) => {      
    
    return newBoard.every((Square) => Square != null)

  }