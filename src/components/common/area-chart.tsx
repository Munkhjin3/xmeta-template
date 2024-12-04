'use client';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

export const AreaChartComponent = ({ color, data }: { color: string; data: { time: string; value: number }[] }) => {
  const convertedData = data.map((item) => ({
    name: item.time, 
    uv: item.value,  
  }));

  return (
    <ResponsiveContainer minWidth={80} minHeight={40} className="h-full w-full flex-1">
      <AreaChart width={80} height={40} data={convertedData}>
        <Area type="monotone" dataKey="uv" stroke={color} fill={color} />
      </AreaChart>
    </ResponsiveContainer>
  );
};
