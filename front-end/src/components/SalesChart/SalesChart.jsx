import React from 'react';
import { Doughnut } from 'react-chartjs-2';

function SalesChart () {
  const data = {
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [
      {
        label: 'Vendas 2021 (M)',
        data: [30, 20, 55],
        backgroundColor: [
          'rgba(249, 80, 67)',
          'rgba(52, 201, 246)',
          'rgba(53, 216, 21)',
        ]
      }
    ]
  };



  return <Doughnut data={data} />
};

export default SalesChart
