import React, { PureComponent } from 'react';
import {
  ResponsiveContainer, ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'MONDAY', uv: 590, pv: 800, amt: 1400,
  },
  {
    name: 'TUESDAY', uv: 868, pv: 967, amt: 1506,
  },
  {
    name: 'WEDNESDAY', uv: 1397, pv: 1098, amt: 989,
  },
  {
    name: 'THURSDAY', uv: 1480, pv: 1200, amt: 1228,
  },
  {
    name: 'FRIDAY', uv: 1520, pv: 1108, amt: 1100,
  },
  {
    name: 'SATURDAY', uv: 1400, pv: 680, amt: 1700,
  },
  {
    name: 'SUNDAY', uv: 1400, pv: 680, amt: 1700,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = '//jsfiddle.net/alidingling/9wnuL90w/';

  render() {
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20, right: 20, bottom: 20, left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="amt" fill="#009CD6" stroke="#009CD6" />
            <Bar dataKey="pv" barSize={20} fill="#009CD6" />
            <Line type="monotone" dataKey="uv" stroke="#EF5145" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
