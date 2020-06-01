import React from 'react'
import './CardWrapper.css'

export default function CardWrapper({ href, src, CardName, cardCount }) {
    return (
        <a href={`/used-cars/by/${CardName}`} className="Card">
            <img src={src} alt={CardName} />
            <p className="CardName">{CardName}</p>
            <span className="CardCounter">{cardCount}</span>
        </a>
    )
}
