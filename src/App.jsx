
import './App.css'
import React from "react";
import Menu from "./components/Menu/Menu.jsx";
import ExpenseProvider from "./context/MoneyContext.jsx";
import AddTransaction from "./components/Transactions/AddTransaction.jsx";
import TransactionList from "./components/Transactions/TransactionList.jsx";
import PieChartReports from "./components/Reports/PieChartReports.jsx";

function App()
{
  const Layout = ({children})=>{
    return (
        <div className="w-full h-screen bg-gradient-to-br from-[#0E091B] via-[#150F30] to-[#2A2FA8] pt-[40px] px-[40px]">
          <div className="flex flex-row gap-[24px] text-white">
            <Menu/>
            {children}
          </div>
        </div>
    )
  }


  return (
      <ExpenseProvider>
            <Layout>

                <AddTransaction/>
                <TransactionList/>
                <PieChartReports/>

            </Layout>
      </ExpenseProvider>
  )
}

export default App


