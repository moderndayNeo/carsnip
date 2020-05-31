import React from 'react'
import './CarouselWrapper.css'
import Scroller from './Scroller/Scroller'
import BlankSpace from './BlankSpace/BlankSpace'

export default function CarouselWrapper() {
    return (
        <div className="CarouselWrapper">
            <BlankSpace />
            <Scroller />
        </div>
    )
}
