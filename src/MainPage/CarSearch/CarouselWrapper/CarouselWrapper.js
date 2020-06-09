import React from 'react'
import './CarouselWrapper.css'
import CarouselContainer from './CarouselContainer/CarouselContainer'

export default function CarouselWrapper({ scrollerPosition }) {
    return (
        <div className="CarouselWrapper">
            <CarouselContainer scrollerPosition={scrollerPosition} />
        </div>
    )
}
