import React from 'react'
import './CarouselContainer.css'
import Scroller from './Scroller/Scroller'
import ScrollIcon from './ScrollIcon/ScrollIcon'

export default function CarouselContainer() {
    return (
        <div className="CarouselContainer">
            <Scroller />
            <ScrollIcon />
        </div>
    )
}
