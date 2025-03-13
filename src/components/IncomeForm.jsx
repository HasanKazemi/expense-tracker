import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './IncomeForm.css';

const IncomeForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newIncome = {
      id: Date.now().toString(),
      title,
      amount: +amount,
      date,
      category,
      type: 'income',
    };

    dispatch({ type: 'ADD_TRANSACTION', payload: newIncome });

    setTitle('');
    setAmount('');
    setDate('');
    setCategory('');
  };

  return (
    <form className="income-form" onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="">Select ...</option>
          {state.categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Income Register</button>
    </form>
  );
};

export default IncomeForm;