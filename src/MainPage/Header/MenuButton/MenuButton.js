import React from 'react'
import './MenuButton.css'
import ButtonBox from './ButtonBox/ButtonBox'

export default function MenuButton({ onClick }) {
    return (
        <div className="MenuButton" onClick={onClick}>
            <ButtonBox />
        </div>
    )
}
