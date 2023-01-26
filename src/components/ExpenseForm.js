import React, { useContext, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { BudgetContext } from '../contexts/BudgetContext'

const ExpenseForm = () => {

    const { expenses, setExpenses } = useContext(BudgetContext)

    const expenseID = expenses.length
    const [expenseName, setExpanseName] = useState("")
    const [expensePrice, setExpansePrice] = useState("")
    const [expenseDate, setExpanseDate] = useState("")

    const handleExpense = (e) => {
        e.preventDefault()
        if (!expenseName || !expensePrice || !expenseDate) {
            return toast.error("Please fill in all fields.")
        }
        setExpenses([...expenses, { ID: expenseID + 1, name: expenseName, price: expensePrice, date: expenseDate }]);
        localStorage.setItem("expenses", JSON.stringify(expenses))
        setExpanseName("");
        setExpansePrice("");
        setExpanseDate("");
        toast.success(expenseName + " added.")
    }

    return (
        <form className='flex items-center justify-between gap-1 md:flex-col' onSubmit={handleExpense}>
            <div className='relative'>
                <label className='text-glabel text-sm absolute top-2 left-3'>Expense</label>
                <input type="text" className='inputs'
                    value={expenseName}
                    onChange={(e) => setExpanseName(e.target.value)}
                ></input>
            </div>
            <div className='relative'>
                <label className='text-glabel text-sm absolute top-2 left-3'>Amount</label>
                <input type="number" className='inputs'
                    value={expensePrice}
                    onChange={(e) => setExpansePrice(e.target.value)}
                ></input>
            </div>
            <div className='relative'>
                <label className='text-glabel text-sm absolute top-2 left-3'>Date</label>
                <input type="date" className='inputs'
                    value={expenseDate}
                    onChange={(e) => setExpanseDate(e.target.value)}
                ></input>
            </div>
            <button type='submit'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="">
                    <path d="M13.5 3C13.5 2.44772 13.0523 2 12.5 2H11.5C10.9477 2 10.5 2.44772 10.5 3V10.5H3C2.44772 10.5 2 10.9477 2 11.5V12.5C2 13.0523 2.44772 13.5 3 13.5H10.5V21C10.5 21.5523 10.9477 22 11.5 22H12.5C13.0523 22 13.5 21.5523 13.5 21V13.5H21C21.5523 13.5 22 13.0523 22 12.5V11.5C22 10.9477 21.5523 10.5 21 10.5H13.5V3Z" fill="#51F129" />
                </svg>
            </button>
            <Toaster position='top-left' />
        </form>
    )
}

export default ExpenseForm