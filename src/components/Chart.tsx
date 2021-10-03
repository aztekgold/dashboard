import React from 'react'
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

type Props = {
 data: Array<Object>
}

const Chart: React.FC<Props> = ({data}) => {
    return (
        <ResponsiveContainer width="100%" height={400}>
        <AreaChart width={600} height={300} data={data} margin={{ top: 5, right: 15, bottom: 15, left: 0 }}>
        <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#2d54ff" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#2d54ff" stopOpacity={0}/>
    </linearGradient>
  </defs>
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" vertical={false}/>
        <Area type="monotone" dataKey="uv" stroke="#2d54ff" strokeWidth={2} fillOpacity={1} fill="url(#colorUv)" />
        <XAxis dataKey="name" axisLine={false} tickLine={false} minTickGap={50}/>
        <YAxis axisLine={false} tickLine={false}/>
        <Tooltip />
      </AreaChart>

    </ResponsiveContainer>
    )
}

export default Chart
