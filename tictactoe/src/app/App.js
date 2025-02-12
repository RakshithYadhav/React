"use client";
import { useState } from "react";
import "./styles.css";

function Square({ value, onSquareClick, isWinning }) {
  return (
    <button
      className={`square ${isWinning ? "winning-square" : ""} `}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  const [board, setBoard] = useState(new Array().fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winning_set, setWinningSet] = useState([]);

  function handleSqaureClick(index) {
    if (board[index] || winning_set.length > 0) return;

    const tempBoard = [...board];
    tempBoard[index] = isXNext ? "X" : "O";
    setBoard(tempBoard);
    setIsXNext(!isXNext);

    const gameInfo = isGameOver(tempBoard);
    if (gameInfo.isWin) {
      setWinningSet([...gameInfo.winningSet]);
      return;
    }
  }

  function isGameOver(board) {
    const winning_set = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const set of winning_set) {
      if (
        board[set[0]] &&
        board[set[0]] === board[set[1]] &&
        board[set[1]] === board[set[2]]
      ) {
        return { isWin: true, winningSet: set };
      }
    }

    return { isWin: false, winningSet: null };
  }

  return (
    <>
      <div className="board-row">
        <Square
          value={board[0]}
          onSquareClick={() => handleSqaureClick(0)}
          isWinning={winning_set.includes(0)}
        />
        <Square
          value={board[1]}
          onSquareClick={() => handleSqaureClick(1)}
          isWinning={winning_set.includes(1)}
        />
        <Square
          value={board[2]}
          onSquareClick={() => handleSqaureClick(2)}
          isWinning={winning_set.includes(2)}
        />
      </div>
      <div className="board-row">
        <Square
          value={board[3]}
          onSquareClick={() => handleSqaureClick(3)}
          isWinning={winning_set.includes(3)}
        />
        <Square
          value={board[4]}
          onSquareClick={() => handleSqaureClick(4)}
          isWinning={winning_set.includes(4)}
        />
        <Square
          value={board[5]}
          onSquareClick={() => handleSqaureClick(5)}
          isWinning={winning_set.includes(5)}
        />
      </div>
      <div className="board-row">
        <Square
          value={board[6]}
          onSquareClick={() => handleSqaureClick(6)}
          isWinning={winning_set.includes(6)}
        />
        <Square
          value={board[7]}
          onSquareClick={() => handleSqaureClick(7)}
          isWinning={winning_set.includes(7)}
        />
        <Square
          value={board[8]}
          onSquareClick={() => handleSqaureClick(8)}
          isWinning={winning_set.includes(8)}
        />
      </div>
    </>
  );
}
