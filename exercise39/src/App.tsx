import React from "react";
import Board from "./Board";
import "./index.css";

const App: React.FC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Tic Tac Toe Game</h1>
      <Board />
    </div>
  );
};

export default App;
