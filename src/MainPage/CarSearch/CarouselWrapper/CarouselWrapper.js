import React from 'react'
import './CarouselWrapper.css'
import CarouselContainer from './CarouselContainer/CarouselContainer'

export default function CarouselWrapper({
    scrollerPosition,
    typedFirstPhrase,
}) {
    return (
        <div className="CarouselWrapper">
            <CarouselContainer
                scrollerPosition={scrollerPosition}
                typedFirstPhrase={typedFirstPhrase}
            />
        </div>
    )
}
