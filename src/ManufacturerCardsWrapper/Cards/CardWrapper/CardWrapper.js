import React from 'react'
import './CardWrapper.css'

export default function CardWrapper({ href, src, cardName, cardCount }) {

    return (
        <a href={`/used-cars/by/${cardName}`} className="CardWrapper">
            <img src={src} alt={cardName} />
            <p className="cardName">{cardName}</p>
            <span className="CardCounter">({cardCount})</span>
        </a>
    )
}
