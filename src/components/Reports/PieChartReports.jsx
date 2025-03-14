import React, {PureComponent, useContext} from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const transactions = [
    { name: 'food', value: 40 },
    { name: 'transport', value: 60 },
    { name: 'rent', value: 50 },
    { name: 'university', value: 80 },
];



const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
 const PieChartReports =()=>{
// const {transactions}=useContext();
     const RADIAN = Math.PI / 180;
     const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
         const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
         const x = cx + radius * Math.cos(-midAngle * RADIAN);
         const y = cy + radius * Math.sin(-midAngle * RADIAN);

         return (
             <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                 {`${(percent * 100).toFixed(0)}%`}
             </text>
         );
     };

     return(
         <div className="flex flex-col gap-[16px] p-[16px] shadow-md bg-gradient-to-br from-[#334DFF]  to-[#3C7BEB] pt-[40px] px-[40px] rounded-[8px]">
             <PieChart width={400} height={400}>
                 <Pie
                     data={transactions}
                     cx="50%"
                     cy="50%"
                     labelLine={false}
                     label={renderCustomizedLabel}
                     outerRadius={80}
                     fill="#8884d8"
                     dataKey="value"
                 >
                     {transactions.map((entry, index) => (
                         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                     ))}
                 </Pie>
             </PieChart>

         </div>

     )
 }

 export default PieChartReports;