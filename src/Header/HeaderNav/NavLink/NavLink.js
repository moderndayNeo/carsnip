import React from 'react'
import './NavLink.css'

export default function NavLink({ href, text }) {
    return (
        <li className="NavLink">
            <a href={href} className="StaticNavLink">
                {text}
            </a>
        </li>
    )
}
