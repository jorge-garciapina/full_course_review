import React from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { RootState } from "./store"; 
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const RandomDataChart: React.FC = () => {
  const dataPoints = useSelector(
    (state: RootState) => state.chartData.dataPoints
  );

  const data = {
    labels: Array.from({ length: dataPoints.length }, (_, i) => i + 1),
    datasets: [
      {
        label: "Random Data",
        data: dataPoints,
        borderColor: "#2196F3",
        backgroundColor: "#2196F34D",
      },
    ],
  };

  return <Line data={data} />;
};

export default RandomDataChart;
