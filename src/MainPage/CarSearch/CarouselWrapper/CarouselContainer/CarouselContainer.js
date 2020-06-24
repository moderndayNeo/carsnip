import React from 'react'
import './CarouselContainer.css'
import Scroller from './Scroller/Scroller'
import ScrollIcon from './ScrollIcon/ScrollIcon'
import CarouselContextProvider from '../../CarouselContextProvider'

export default function CarouselContainer({
    scrollerPosition,
    typedFirstPhrase,
}) 
{
    return (
        <div className="CarouselContainer">
            <CarouselContextProvider>
                <Scroller
                    scrollerPosition={scrollerPosition}
                    typedFirstPhrase={typedFirstPhrase}
                />
            </CarouselContextProvider>
            <ScrollIcon />
        </div>
    )
}
