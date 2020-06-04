import React from 'react'
import './PopupMenu.css'
import CarsnipLogo from '../MainPage/CarSearch/CarsnipLogo/CarsnipLogo'
import HeaderNav from '../MainPage/Header/HeaderNav/HeaderNav';

export default function PopupMenu() {
    return (
        <nav className="PopupMenu">
            <a className="LogoWrapper" href="/">
                <CarsnipLogo />
            </a>
            <HeaderNav />

            <ul className="List">
                <li>
                    <a className="Link" href="/">
                        Home
                    </a>
                </li>
                <li>
                    <a className="Link" href="/used-cars">
                        Used Cars
                    </a>
                </li>
                <li>
                    <a className="Link" href="/value-my-car">
                        Value My Car
                    </a>
                </li>
                <li>
                    <a className="Link" href="/about">
                        About
                    </a>
                </li>
                <li>
                    <a className="Link" href="/dealers">
                        Dealers
                    </a>
                </li>
            </ul>
        </nav>
    )
}
