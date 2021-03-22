import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import styles from './SalesChart.module.css';

function SalesChart () {
  const data = {
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [
      {
        data: [300, 200, 100],
        backgroundColor: [
          'rgba(249, 80, 67)',
          'rgba(52, 201, 246)',
          'rgba(53, 216, 21)',
        ]
      }
    ]
  };

  const options = {
    title: {
      display: true,
      text: 'Dados de venda mensal'
    },
  }

  return (
    <>
      <container className={styles.container}>
        <h1>Vendas</h1>
        <Doughnut className={styles.chart} data={data} options={options}/>
      </container>
    </>
  )
};

export default SalesChart
