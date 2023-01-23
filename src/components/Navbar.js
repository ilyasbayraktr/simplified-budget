import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='bg-transparent text-white pr-5 pt-5 flex gap-5 fixed top-0 right-0'>
            <NavLink className={({ isActive }) => isActive && 'underline'} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => isActive && 'underline'} to="/statistics">Statistics</NavLink>
            <NavLink className={({ isActive }) => isActive && 'underline'} to="/all-expenses">All Expenses</NavLink>
        </nav>
    )
}

export default Navbar