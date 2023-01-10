import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["delhi", "banglore", "chennai", "mysore", "kerala", "mumbai"],
  datasets: [
    {
      label: "pollution level",
      data: [50, 10, 30, 15, 15, 20],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
      maxheight: "100vh",
    },
  ],
};

export function Piechart() {
  return (
    <div style={{ maxheight: "100vh" }}>
      <Pie
        options={{ maintainAspectRatio: false }}
        style={{
          width: "50%",
          padding: "20px",
          height: "30%",
          maxheight: "100vh",
        }}
        data={data}
      />
    </div>
  );
}
