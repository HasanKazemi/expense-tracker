import React, {useContext, useState} from 'react';
import {ExpenseContext} from "../../context/MoneyContext.jsx";

const AddTransaction = () =>
{
    const {addTransaction} =useContext(ExpenseContext);
    const [title,setTitle]=useState("")
    const [value,setValue]=useState("")
    const [date,setDate]=useState("")


    const handleSubmit =(e)=>
    {
        e.preventDefault();
        if(!title || !value || !date) return;
        addTransaction({id:Date.now(),title,value:parseFloat(value),date});
        setTitle("")
        setValue("")
        setDate("")
    }


    return (
        <form className="flex flex-col gap-[16px] p-[16px] shadow-md bg-gradient-to-br from-[#334DFF]  to-[#3C7BEB] pt-[40px] px-[40px] rounded-[8px]" onSubmit={handleSubmit}>
            <h1>Add transaction</h1>
            <input type="text" placeholder="Title" value={title}
                   onChange={(e)=>setTitle(e.target.value)}
                className="border border-gray-300 p-[8px] rounded-[8px]"
            />

            <input type="number" placeholder="Value" value={value}
                   onChange={(e)=>setValue(e.target.value)}
                   className="border border-gray-300 p-[8px] rounded-[8px]"
            />

            <input type="date" placeholder="date" value={date}
                   onChange={(e)=>setDate(e.target.value)}
                   className="border border-gray-300 p-[8px] rounded-[8px]"
            />
            <button
            type="submit"
            className="p-[8px] bg-[#090C2F] rounded-[4px]"
            >
                Add Transaction
            </button>

        </form>
    );
};

export default AddTransaction;