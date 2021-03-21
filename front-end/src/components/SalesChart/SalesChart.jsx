import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import styles from './SalesChart.module.css';

function SalesChart () {
  const data = {
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [
      {
        label: 'Vendas 2021 (M)',
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
    }
  }

  return (
    <Doughnut className={styles.container} data={data} options={options}/>
  )
};

export default SalesChart
