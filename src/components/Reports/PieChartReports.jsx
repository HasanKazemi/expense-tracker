import React, { useContext } from 'react';
import { ExpenseContext } from '../../context/MoneyContext.jsx';
import { PieChart, Pie, Cell } from 'recharts';

const PieChartReports = () => {
    const { transactions } = useContext(ExpenseContext);
    const formattedTransactions = transactions.map(transaction => ({
        name: transaction.name,
        value: parseFloat(transaction.value)
    }));

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className="flex flex-col gap-[16px] p-[16px] shadow-md bg-gradient-to-br from-[#334DFF] to-[#3C7BEB] pt-[40px] px-[40px] rounded-[8px]">
            <PieChart width={400} height={400}>
                <Pie
                    data={formattedTransactions}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {formattedTransactions.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </div>
    );
}

export default PieChartReports;
