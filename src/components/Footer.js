import React, { useContext } from 'react'
import { BudgetContext } from '../contexts/BudgetContext'

const Footer = () => {

    const { budget, expenses } = useContext(BudgetContext)

    const totalExpenses = expenses.reduce((acc, expense) => acc + parseFloat(expense.price), 0);
    const remainingBudget = budget - totalExpenses;
    const remainingClass = remainingBudget >= 0 ? 'text-green-700' : 'text-red-700';

    return (
        <footer className='flex justify-between bg-white w-full px-[5%] py-10 fixed bottom-0 md:py-5'>
            <div>
                <h3 className='font-semibold mb-3'>Income</h3>
                <h1 className='font-bold text-5xl md:text-3xl'>{budget}</h1>
            </div>
            <div>
                <h3 className='font-semibold mb-3'>Expenses</h3>
                <h1 className='font-bold text-5xl md:text-3xl'>{totalExpenses}</h1>
            </div>
            <div>
                <h3 className='font-semibold mb-3'>Balance</h3>
                <h1 className={`font-bold text-5xl md:text-3xl ${remainingClass}`}>{remainingBudget}</h1>
            </div>
        </footer>
    )
}

export default Footer