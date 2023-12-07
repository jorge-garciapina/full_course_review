import React from "react";
import Button from "@mui/material/Button";

type SquareProps = {
  value: "X" | "O" | null;
  onClick: () => void;
};

const Square: React.FC<SquareProps> = ({ value, onClick }) => (
  <Button
    className="square"
    onClick={onClick}
    style={{ width: 80, height: 80 }}
  >
    {value}
  </Button>
);

export default Square;
