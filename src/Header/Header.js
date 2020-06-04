import React from 'react'
import './Header.css'
import MenuButton from './MenuButton/MenuButton'
import HeaderNav from './HeaderNav/HeaderNav'

export default function Header({ onClick }) {

    return (
        <div className="Header">
            <MenuButton onClick={onClick} />
            <HeaderNav />
        </div>
    )
}
