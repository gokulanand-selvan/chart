import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
    labels: ["delhi", "banglore", "chennai", "mysore", "kerala", "mumbai"],
    datasets: [
        {
            label: "pollution level",
            data: [70,30, 50, 25, 35, 40],
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
            ],            borderWidth: 1,
        },
    ],
};

export function Radarchart() {
    return (
        <div style={{maxheight:"100vh"}} >
        <Radar
            options={{ maintainAspectRatio: false }}
          style={{
            width: "50%",
            padding: "20px",
            height:"70%",
            maxheight:"100vh"
          }}
          data={data}
        />
        </div>
      );}
