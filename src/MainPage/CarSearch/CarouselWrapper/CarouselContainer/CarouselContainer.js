import React from 'react'
import './CarouselContainer.css'
import Scroller from './Scroller/Scroller'
import ScrollIcon from './ScrollIcon/ScrollIcon'
import CarouselContextProvider from '../../CarouselContextProvider'

export default function CarouselContainer({ scrollerPosition }) {
    return (
        <div className="CarouselContainer">
            <CarouselContextProvider>
                <Scroller scrollerPosition={scrollerPosition}  />
            </CarouselContextProvider>

            <ScrollIcon />
        </div>
    )
}
