import { useContext } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip } from 'recharts';
import { BudgetContext } from '../contexts/BudgetContext';

const Statistics = () => {

    const { expenses } = useContext(BudgetContext);

    return (
        <div className='containers'>
            <div className='w-full h-[25rem]'>
                <ResponsiveContainer>
                    <LineChart data={expenses}>
                        <CartesianGrid />
                        <Tooltip />
                        <Line type="monotone" dataKey="price" stroke="#51F129" />
                        <XAxis dataKey="date" />
                        <YAxis />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>

    )
}

export default Statistics