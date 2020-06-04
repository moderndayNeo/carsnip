import React from 'react'
import './ManufacturerCardsWrapper.css'
import ManufacturerCardsTitle from './ManufacturerCardsTitle/ManufacturerCardsTitle'
import Cards from './Cards/Cards'

export default function ManufacturerCardsWrapper() {
    return (
        <div className="ManufacturerCardsWrapper">
            <ManufacturerCardsTitle />
            <Cards />
        </div>
    )
}
