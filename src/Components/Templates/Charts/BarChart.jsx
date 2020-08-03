import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Visits', uv: 4000, pv: 2400, amt: 2400,
    name: 'Visits', dv: 4700, pv: 2400, amt: 2400,
  },
  {
    name: 'Sub. Flow Visits', uv: 3000, pv: 1398, amt: 2210,
    name: 'Sub. Flow Visits', dv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Visitors', uv: 2000, pv: 9800, amt: 2290,
    name: 'Visitors', dv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Shoppers', uv: 2000, pv: 9800, amt: 2290,
    name: 'Shoppers', dv: 5400, pv: 9800, amt: 2290
  }

];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/q4eonc12/';

  render() {
    return (
      <BarChart
        width={500}
        height={245}
        min-width={300}
        data={data}
        margin={{
          top: 5, right: 15, left: 15, bottom: 5,
        }}
        barSize={15}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis /> 
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="pv" fill="#009cd6" background={{ fill: '#eee' }} />
        <Bar dataKey="dv" fill="#EF5145" background={{ fill: '#eee' }} />
      </BarChart>
    );
  }
}
