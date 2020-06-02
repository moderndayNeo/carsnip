import React from 'react'
import './PolicyLinks.css'

export default function PolicyLinks() {
    return (
        <ul className="PolicyLinks">
            <li className="PolicyLink">
                <a title="Terms of Use" href="/terms">
                    Terms of use
                </a>
            </li>
            <li className="PolicyLink">
                <a title="Privacy Policy" href="/terms#privacy">
                    Privacy policy
                </a>
            </li>
        </ul>
    )
}
