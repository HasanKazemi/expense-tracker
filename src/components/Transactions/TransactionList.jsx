import React, {useContext} from 'react';
import {ExpenseContext} from "../../context/MoneyContext.jsx";
import TransactionItem from "./TransactionItem.jsx";

const TransactionList = () =>
{
    const {transactions}=useContext(ExpenseContext);


    return (
        <div className="flex flex-col gap-[16px] p-[16px] shadow-md bg-gradient-to-br from-[#334DFF]  to-[#3C7BEB] pt-[40px] px-[40px] rounded-[8px]">
            <h2> Recent trans</h2>
            {transactions.length>0 ?(
                <div className="flex flex-col space-y-[8px]">
                    {
                     transactions.map((tr)=>(
                         <TransactionItem key={tr.id} transcation={tr}/>
                     ))
                    }
                </div>
            ):(
                <p className="text-gray-400">Not found</p>
            )}
        </div>
    );
};

export default TransactionList;