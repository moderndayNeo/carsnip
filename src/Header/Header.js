import React from 'react'
import './Header.css'
import MenuButton from './MenuButton/MenuButton'
import HeaderNav from './HeaderNav/HeaderNav'

export default function Header() {
    return (
        <div className="Header">
            <MenuButton />
            <HeaderNav />
        </div>
    )
}
