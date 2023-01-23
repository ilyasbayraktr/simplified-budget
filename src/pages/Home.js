import React from 'react'
import BudgetAmount from '../components/BudgetAmount'
import Expense from '../components/Expense'
import ExpenseForm from '../components/ExpenseForm'

const Home = () => {
    return (
        <div className='grid grid-cols-2 min-h-screen'>
            <div className='bg-addpanel px-[5%] py-[25%] md:py-[50%]'>
                <h1 className='text-white font-bold text-4xl sm:text-3xl'>Simplified Budget</h1>
                <BudgetAmount />
                <ExpenseForm />
            </div>
            <div className='bg-black px-[5%] py-[25%] md:py-[50%]'>
                <h2 className='text-lgreen text-xl font-semibold mb-5'>Expenses</h2>
                <div className='max-h-96 overflow-y-scroll hide-scrollbar'>
                    <Expense />
                </div>
            </div>
        </div>
    )
}

export default Home