import React from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import PieChart from './components/PieChart';
import { AppProvider } from './context/AppContext';

const App = () => {
  return (
    <AppProvider>
      <div>
        <h1>مدیریت هزینه‌ها</h1>
        <TransactionForm />
        <TransactionList />
        <PieChart />
      </div>
    </AppProvider>
  );
};

export default App;