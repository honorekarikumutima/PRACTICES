import React from 'react'
import logo from './react.svg'

export default function Navbar() {
    return (
        <header  className='header'>
            <nav className='nav-bar'>
                <img src={logo} alt="Logo" className='logo'/>
                <h3 className='fact'>ReactFacts</h3>
                <h4>React Course - Project 1</h4>
            </nav>
        </header>
    )
}