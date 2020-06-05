import React from 'react'
import NavLink from './NavLink/NavLink'
import './HeaderNav.css'

export default function HeaderNav({ popupMenuVisible }) {

    console.log(popupMenuVisible)
    return (
        <nav className="HeaderNav">
            <ul>
                { popupMenuVisible && <NavLink href="/" text="Home" /> }
                <NavLink href="/used-cars" text="Used Cars" />
                <NavLink href="/value-my-car" text="Value My Car" />
                <NavLink href="/about/" text="About" />
                <NavLink href="/dealers/" text=" Dealers" />
            </ul>
        </nav>
    )
}
