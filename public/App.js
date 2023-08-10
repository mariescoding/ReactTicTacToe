import React from "react";
import { useState } from "react";
import { useSetLetter, useCalcWinner } from "/customHook";

function Square({ letter, onSClick }) {
  return (
    <button className="square" onClick={onSClick}>
      {letter}
    </button>
  );
}

export default function Board() {
  const { squares, handleClick, status } = useSetLetter();

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square letter={squares[0]} onSClick={() => handleClick(0)} />
        <Square letter={squares[1]} onSClick={() => handleClick(1)} />
        <Square letter={squares[2]} onSClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square letter={squares[3]} onSClick={() => handleClick(3)} />
        <Square letter={squares[4]} onSClick={() => handleClick(4)} />
        <Square letter={squares[5]} onSClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square letter={squares[6]} onSClick={() => handleClick(6)} />
        <Square letter={squares[7]} onSClick={() => handleClick(7)} />
        <Square letter={squares[8]} onSClick={() => handleClick(8)} />
      </div>
    </>
  );
}
