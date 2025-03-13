const appReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TRANSACTION':
        return {
          ...state,
          transactions: [action.payload, ...state.transactions]
        };
      case 'DELETE_TRANSACTION':
        return {
          ...state,
          transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
        };
      case 'ADD_CATEGORY':
        return {
          ...state,
          categories: [...state.categories, action.payload]
        };
      case 'INIT_TRANSACTIONS':
        return {
          ...state,
          transactions: action.payload
        };
      default:
        return state;
    }
  };

export default appReducer;