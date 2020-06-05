import React from 'react'
import './PopupMenu.css'
import CarsnipLogo from '../MainPage/CarSearch/CarsnipLogo/CarsnipLogo'
import HeaderNav from '../MainPage/Header/HeaderNav/HeaderNav'

export default function PopupMenu({ popupMenuVisible }) {
    return (
        <nav className={`PopupMenu ${popupMenuVisible && "popupMenuVisible"}`}>
            <a className="LogoWrapper" href="/">
                <CarsnipLogo />
            </a>
            <HeaderNav popupMenuVisible={popupMenuVisible} />
        </nav>
    )
}
