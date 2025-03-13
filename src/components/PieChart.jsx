import React, { useContext } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { AppContext } from '../context/AppContext';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const { state } = useContext(AppContext);

  // محاسبه مجموع هزینه‌ها برای هر دسته‌بندی
  const categories = [...new Set(state.transactions.map(transaction => transaction.category))];
  const data = {
    labels: categories,
    datasets: [
      {
        label: 'هزینه‌ها',
        data: categories.map(category =>
          state.transactions
            .filter(transaction => transaction.category === category)
            .reduce((sum, transaction) => sum + transaction.amount, 0)
        ),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;