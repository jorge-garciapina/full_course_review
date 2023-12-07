import React, { useState } from "react";
import Square from "./Square";
import Button from "@mui/material/Button";
import { calculateWinner } from "./helpers";

const Board: React.FC = () => {
  const [squares, setSquares] = useState<Array<"X" | "O" | null>>(
    Array(9).fill(null)
  );
  const [isX, setIsX] = useState<boolean>(true);

  const handleClick = (i: number) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[i] = isX ? "X" : "O";
    setSquares(newSquares);
    setIsX(!isX);
  };

  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setIsX(true);
  };

  const renderSquare = (i: number) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${isX ? "X" : "O"}`;

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div className="status">{status}</div>
      <Button
        className="restart"
        onClick={handleRestart}
        variant="contained"
        color="primary"
      >
        Restart Game!
      </Button>
    </div>
  );
};

export default Board;
