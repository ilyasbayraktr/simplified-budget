import React, { useContext, useState } from 'react'
import { BudgetContext } from '../contexts/BudgetContext'

const BudgetAmount = () => {

    const { setBudget } = useContext(BudgetContext);

    const [budgetValue, setBudgetValue] = useState("");

    const handleBudget = (e) => {
        setBudget(e.target.value);
        setBudgetValue(e.target.value);
        localStorage.setItem("budget", JSON.stringify(e.target.value))
    }

    return (
        <div className='relative mt-5 mb-10'>
            <label className='text-glabel text-sm absolute top-2 left-3'>Budget Amount</label>
            <input type="number" value={budgetValue} onChange={handleBudget} className='inputs'></input>
        </div>
    )
}

export default BudgetAmount