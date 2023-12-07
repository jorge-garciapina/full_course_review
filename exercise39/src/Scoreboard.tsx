import React from "react";
import { Typography } from "@mui/material";

interface ScoreboardProps {
  scores: { wins: number; losses: number; ties: number };
}

const Scoreboard: React.FC<ScoreboardProps> = ({ scores }) => (
  <div>
    <Typography variant="h6">Wins: {scores.wins}</Typography>
    <Typography variant="h6">Losses: {scores.losses}</Typography>
    <Typography variant="h6">Ties: {scores.ties}</Typography>
  </div>
);

export default Scoreboard;
