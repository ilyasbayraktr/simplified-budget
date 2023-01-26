import { createContext, useState, useEffect } from "react";

export const BudgetContext = createContext()

export const BudgetProvider = ({ children }) => {

    const [budget, setBudget] = useState(0)
    const [expenses, setExpenses] = useState([])

    useEffect(() => {
        const budgetStorage = localStorage.getItem("budget")
        const expensesStorage = localStorage.getItem("expenses")
        if (budgetStorage) {
            setBudget(JSON.parse(budgetStorage))
        }
        if (expensesStorage) {
            setExpenses(JSON.parse(expensesStorage))
        }
    }, [])

    return (
        <BudgetContext.Provider value={{ budget, setBudget, expenses, setExpenses }}>
            {children}
        </BudgetContext.Provider>
    )
}
