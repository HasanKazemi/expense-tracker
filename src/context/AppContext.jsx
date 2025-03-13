import React, { createContext, useReducer, useEffect } from 'react';

const initialState = {
  transactions: [],
  categories: ['غذا', 'حمل‌ونقل', 'قبوض', 'تفریح']
};

const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    dispatch({ type: 'INIT_TRANSACTIONS', payload: transactions });
  }, []);

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