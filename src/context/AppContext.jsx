import React, { createContext, useReducer, useEffect } from 'react';

// حالت اولیه
const initialState = {
  transactions: [],
  categories: ['غذا', 'حمل‌ونقل', 'قبوض', 'تفریح'],
};

// ایجاد Context
const AppContext = createContext(initialState);

// Reducer برای مدیریت عملیات‌ها
const appReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload),
      };
    case 'ADD_CATEGORY':
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    case 'INIT_TRANSACTIONS':
      return {
        ...state,
        transactions: action.payload,
      };
    default:
      return state;
  }
};

// Provider برای ارائه Context به کل برنامه
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // بارگذاری تراکنش‌ها از LocalStorage هنگام لود شدن برنامه
  useEffect(() => {
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    dispatch({ type: 'INIT_TRANSACTIONS', payload: transactions });
  }, []);

  // ذخیره تراکنش‌ها در LocalStorage هر زمان که تغییر می‌کنند
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(state.transactions));
  }, [state.transactions]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };