import React from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import PieChart from './components/PieChart';
import { AppProvider } from './context/AppContext';
import './App.css'; // Import CSS

const App = () => {
  return (
    <AppProvider>
      <div className="app">
        <h1>Cost Management</h1>
        <TransactionForm />
        <TransactionList />
        <PieChart />
      </div>
    </AppProvider>
  );
};

export default App;