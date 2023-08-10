import { useState } from "react";

export const useSetLetter = () => {
  const [hasFinished, setHasFinished] = useState(false);
  const [xIsNext, setXIsNext] = useState(true);
  const [status, setStatus] = useState("");
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    const nextSquares = squares.slice();

    if (squares[i] || hasFinished) return;

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNext);

    let winner = calculateWinner(nextSquares);

    if (winner) {
      setStatus("Winner is " + winner);
      setHasFinished(true);
    } else {
      setStatus("No winner yet ");
    }
  };

  function calculateWinner(nextSquares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (
        nextSquares[a] &&
        nextSquares[a] === nextSquares[b] &&
        nextSquares[a] === nextSquares[c]
      ) {
        return nextSquares[a];
      }
    }
    return null;
  }

  return { squares, handleClick, status };
};
