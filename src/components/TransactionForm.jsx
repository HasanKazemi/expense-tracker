import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const TransactionForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now().toString(),
      title,
      amount: +amount,
      date,
      category,
    };

    dispatch({ type: 'ADD_TRANSACTION', payload: newTransaction });

    // پاک کردن فرم پس از ثبت
    setTitle('');
    setAmount('');
    setDate('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>عنوان:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>مبلغ:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div>
        <label>تاریخ:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>دسته‌بندی:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="">انتخاب کنید</option>
          {state.categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">ثبت تراکنش</button>
    </form>
  );
};

export default TransactionForm;