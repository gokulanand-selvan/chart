import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' 
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ["delhi", "banglore", "chennai", "mysore", "kerala", "mumbai"];

export const data = {
  labels,
  datasets: [
    {
      label: 'pollution level 2021',
      data: [50, 10, 30, 15, 15, 20],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'pollution level 2022',
      data: [40,30, 25, 10, 20, 35],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function VerticalBar() {
  return <Bar 
  style={{width:"40%",height:"30%"}}    
   data={data} />;
}
