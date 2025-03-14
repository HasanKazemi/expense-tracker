import React from 'react';

const TransactionItem = ({transcation}) => {
    return (
        <div>
            <span>{transcation.title}</span>
            <span>{transcation.value}$</span>
        </div>
    );
};

export default TransactionItem;