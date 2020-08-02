import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'JAN', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'FEV', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'MAR', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'MAI', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'JUN', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'JUL', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'AUG', uv: 3490, pv: 4300, amt: 2100,
  },
  {
    name: 'SEP', uv: 3490, pv: 1300, amt: 2100,
  },
  {
    name: 'OUT', uv: 1790, pv: 6300, amt: 6100,
  },
  {
    name: 'NOV', uv: 1490, pv: 7300, amt: 5100,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/1p40zzfe/';

  state = {
    opacity: {
      uv: 1,
      pv: 1,
    },
  };

  handleMouseEnter = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 0.5 },
    });
  }

  handleMouseLeave = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 1 },
    });
  }

  render() {
    const { opacity } = this.state;

    return (
      <div>
        <LineChart
          width={500}
          height={300}
          min-width={300}
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} />
          <Line type="monotone" dataKey="pv" strokeOpacity={opacity.pv} stroke="#EF5145" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="pv" strokeOpacity={opacity.pv} stroke="#EF5145" activeDot={{ r: 2 }} />
          <Line type="monotone" dataKey="uv" strokeOpacity={opacity.pv} stroke="#4EC8F4" />
        </LineChart>

      </div>
    );
  }
}
