import React, { useState } from 'react'
import './CarSearch.css'
import CarsnipLogo from './CarsnipLogo/CarsnipLogo'
import SearchWrapper from './SearchWrapper/SearchWrapper'
import CarouselWrapper from './CarouselWrapper/CarouselWrapper'
export default function CarSearch() {
    const [scrollerPosition, setScrollerPosition] = useState(0)

    const handleTypingFinished = () => {
        console.log('Typing finished')
        setScrollerPosition(scrollerPosition + 1)
    }

    return (
        <div className="CarSearch">
            <CarsnipLogo />
            <SearchWrapper onTypingEnd={handleTypingFinished} />
            <CarouselWrapper scrollerPosition={scrollerPosition} />
        </div>
    )
}
