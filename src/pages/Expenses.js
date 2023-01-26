import React, { useContext } from 'react'
import { BudgetContext } from '../contexts/BudgetContext'
import { useTable, useSortBy } from 'react-table'

const columns = [{ Header: 'ID', accessor: 'ID', }, { Header: 'Name', accessor: 'name', }, { Header: 'Price', accessor: 'price', }, { Header: 'Date', accessor: 'date', },]

const Expenses = () => {

    const { expenses } = useContext(BudgetContext)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data: expenses }, useSortBy)

    return (
        <div className='containers'>
            <div className='w-full max-h-[29rem] overflow-y-scroll hide-scrollbar p-5 bg-white'>
                <table {...getTableProps()} className="w-full">
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th className='text-start border-b-2 border-black' {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render('Header')}
                                        <span>
                                            {column.isSorted
                                                ? column.isSortedDesc
                                                    ? ' ⇩'
                                                    : ' ⇧'
                                                : ' ⇳'}
                                        </span>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row, i) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return <td className='py-1 border-b-2' {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Expenses