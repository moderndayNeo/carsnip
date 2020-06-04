import React from 'react'
import './ButtonBox.css'

export default function ButtonBox({ onClick }) {
    return (
        <svg viewBox="0 0 252.1 204.1" x="0px" y="0px" className="ButtonBox" onClick={onClick}>
            <path d="M232.1,48.1H20c-11,0-20-9-20-20V20C0,9,9,0,20,0h212.1c11,0,20,9,20,20v8.1 C252.1,39.2,243.1,48.1,232.1,48.1z"></path>
            <path d="M232.1,126.1H20c-11,0-20-9-20-20V98c0-11,9-20,20-20h212.1c11,0,20,9,20,20v8.1 C252.1,117.2,243.1,126.1,232.1,126.1z"></path>
            <path d="M232.1,204.1H20c-11,0-20-9-20-20V176c0-11,9-20,20-20h212.1c11,0,20,9,20,20v8.1 C252.1,195.2,243.1,204.1,232.1,204.1z"></path>
        </svg>
    )
}
