import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
    labels: ["delhi", "banglore", "chennai", "mysore", "kerala", "mumbai"],
  datasets: [
    {
        label: "pollution level",
        data: [40,30, 25, 10, 20, 35],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderWidth: 1,
    },
  ],
};

export function Polarchart() {
    return (
        <div style={{maxheight:"100vh"}} >
        <PolarArea
            options={{ maintainAspectRatio: false }}
          style={{
            width: "50%",
            padding: "20px",
            height:"50%",
            maxheight:"100vh"
          }}
          data={data}
        />
        </div>
      );}
