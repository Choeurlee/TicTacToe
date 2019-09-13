import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { TicTacToeBoard } from "./tic";

function App() {
  const [board, setBoard] = React.useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ]);
  const [playTurn, setPlayTurn] = React.useState("X");

  React.useEffect(() => {
    
  });

  const handleClick = (row, column) => {
    if (board[row][column] !== "") return;

    board[row][column] = playTurn;
    setBoard(board);
    if (playTurn === "X") {
      setPlayTurn("O");
    } else {
      setPlayTurn("X");
    }
  };

  return (
    <div className="App">
      <h1>{playTurn}'s turn</h1>
      <TicTacToeBoard board={board} onClick={handleClick} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);