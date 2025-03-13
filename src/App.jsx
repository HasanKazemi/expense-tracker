import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import PieChart from './components/PieChart';
import IncomeForm from './components/IncomeForm';
import { AppProvider } from './context/AppContext';
import './App.css';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <div className="app">
          <h1>مدیریت هزینه‌ها و درآمدها</h1>
          <nav>
            <Link to="/">هزینه‌ها</Link> | <Link to="/income">درآمدها</Link>
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <TransactionForm />
                  <TransactionList />
                  <PieChart />
                </>
              }
            />
            <Route path="/income" element={<IncomeForm />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;