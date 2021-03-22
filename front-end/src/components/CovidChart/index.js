import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../services';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, deaths, recovered }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchMyAPI = async () => {
      setDailyData(await fetchDailyData());
    }

    fetchMyAPI();
  }, [])

  const barChart = (
    confirmed ? (
      <Bar
        data={{
          labels: ['Infectados', 'Recuperados', 'Mortes'],
          datasets: [
            {
              label: 'Pessoas',
              backgroundColor: ['rgba(52, 201, 246)','rgba(53, 216, 21)','rgba(249, 80, 67)'],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Dados atuais em ${country}` },
        }}
      />
    ) : null
  );

  const lineChart = (
    dailyData[0] ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
          datasets: [{
            data: dailyData.map((data) => data.confirmed),
            label: 'Infectados',
            borderColor: 'rgba(255, 255, 255)',
            backgroundColor: 'rgba(52, 201, 246)',
            fill: true,
          }, {
            data: dailyData.map((data) => data.deaths),
            label: 'Mortes',
            borderColor: 'rgba(255, 255, 255)',
            backgroundColor: 'rgba(249, 80, 67)',
            fill: true,
          },]
        }}
      />
    ) : null
  );


  return (
    <>
      <div className={styles.container}>
        {country ? barChart : lineChart}
      </div>
    </>
  )
}

export default Chart;
