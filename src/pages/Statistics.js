import { useContext } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip } from 'recharts';
import { BudgetContext } from '../contexts/BudgetContext';

const Statistics = () => {

    const { expenses } = useContext(BudgetContext);

    const data = expenses.map(expense => {
        return {
            expenseDate: expense.date,
            Expense: expense.price
        }
    });

    return (
        <div className='containers'>
            <div className='w-full h-[25rem]'>
                <ResponsiveContainer>
                    <LineChart data={data}>
                        <CartesianGrid />
                        <Tooltip />
                        <Line type="monotone" dataKey="Expense" stroke="#51F129" />
                        <XAxis dataKey="expenseDate" />
                        <YAxis allowDataOverflow="true" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>

    )
}

export default Statistics