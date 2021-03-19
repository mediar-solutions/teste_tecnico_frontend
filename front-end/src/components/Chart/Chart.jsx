import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    }

    fetchAPI();
  })

  const lineChart = (
    dailyData.lenght !== 0
      ? (
        <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [{
            data: dailyData.map(({ confirmed }) => confirmed),
            label: 'Infected',
            borderColor: 'rgba(255, 255, 255)',
            backgroundColor: 'rgba(52, 201, 246)',
            fill: true,
          }, {
            data: dailyData.map(({ deaths }) => deaths),
            label: 'Deaths',
            borderColor: 'rgba(255, 255, 255)',
            backgroundColor: 'rgba(249, 80, 67)',
            fill: true,
          }],
        }}
      />) : null
  );

  return (
    <div className={styles.container}>
      {lineChart}
    </div>
  )
}

export default Chart;
