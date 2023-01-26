import React, { useContext } from 'react'
import { BudgetContext } from '../contexts/BudgetContext'
import toast, { Toaster } from 'react-hot-toast';

const Expense = () => {

    const { expenses, setExpenses } = useContext(BudgetContext)

    const handleDelete = (index) => {
        const expense = expenses[index];
        const expenseName = expense.name;
        const newExpenses = expenses.filter((expense, i) => i !== index);
        setExpenses(newExpenses);
        localStorage.setItem("expenses", JSON.stringify(newExpenses));
        toast.error(expenseName + " deleted.")
    }

    return (
        <>
            {
                expenses.map((expense, index) => (
                    <div className='text-white flex items-center justify-between border-b-2 border-stone-800 pb-4 mb-5' key={index}>
                        <p>{expense.name}</p>
                        <div className='flex items-center gap-10 sm:gap-5'>
                            <p>{expense.price}</p>
                            <button onClick={() => handleDelete(index)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23px" height="23px" viewBox="0 0 24 24" fill="none">
                                    <path d="M14 11V17" stroke="#8E909D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10 11V17" stroke="#8E909D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 7V19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19V7" stroke="#8E909D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4 7H20" stroke="#8E909D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7 7L9 3H15L17 7" stroke="#8E909D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <Toaster position='top-left' />
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Expense