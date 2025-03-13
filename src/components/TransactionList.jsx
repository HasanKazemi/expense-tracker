import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import "./transactionlist.css"

const TransactionList = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };

  return (
    <div className='transaction-list'>
      <h2>لیست تراکنش‌ها</h2>
      <ul>
        {state.transactions.map((transaction) => (
          <li key={transaction.id}>
            <span>{transaction.title}</span>
            <span>{transaction.amount.toLocaleString()} تومان</span>
            <span>{transaction.date}</span>
            <span>{transaction.category}</span>
            <button onClick={() => handleDelete(transaction.id)}>حذف</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;