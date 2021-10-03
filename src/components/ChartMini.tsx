import React from 'react'
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {name: '2:00', uv: 400, pv: 2400, amt: 2400}, 
    {name: '3:00', uv: 600, pv: 2400, amt: 2400},
    {name: '4:00', uv: 550, pv: 2400, amt: 2400},
    {name: '5:00', uv: 123, pv: 2400, amt: 2400},
    {name: '6:00', uv: 650, pv: 2400, amt: 2400},
    {name: '7:00', uv: 421, pv: 2400, amt: 2400},
    {name: '8:00', uv: 376, pv: 2400, amt: 2400},
    {name: '9:00', uv: 101, pv: 2400, amt: 2400},
    {name: '10:00', uv: 470, pv: 2400, amt: 2400},
    {name: '11:00', uv: 808, pv: 2400, amt: 2400},
    {name: '12:00', uv: 721, pv: 2400, amt: 2400},
    {name: '13:00', uv: 376, pv: 2400, amt: 2400},
    {name: '14:00', uv: 222, pv: 2400, amt: 2400},
]

const ChartMini = () => {
    return (
        <ResponsiveContainer width={300} height={100}>
        <AreaChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#2d54ff" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#2d54ff" stopOpacity={0}/>
    </linearGradient>
  </defs>
        <Area type="monotone" dataKey="uv" stroke="#2d54ff" strokeWidth={2} fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>

    </ResponsiveContainer>
    )
}

export default ChartMini
