import './Logo.css'
import React from 'react'
import Logo from '../../Assets/logo.png'

export default (props) => 
    <aside className="logo">
        <a href="/" className="logo">
            <img src={Logo} alt="logo"/>
        </a>
    </aside>