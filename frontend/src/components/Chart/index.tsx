import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const COLORS = ['#A3DFC3', '#6BB981', '#5E875A', '#4A692D'];
interface Props {
  amount: Array<{
    name: string;
    value: number;
  }>;
}

const Chart: React.FC<Props> = ({ amount }) => {
  console.log(amount);

  return (
    <PieChart width={400} height={200}>
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={amount}
        cx={200}
        cy={120}
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {amount.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default Chart;
