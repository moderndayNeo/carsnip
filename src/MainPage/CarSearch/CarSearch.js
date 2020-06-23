import React, { useState } from 'react'
import './CarSearch.css'
import CarsnipLogo from './CarsnipLogo/CarsnipLogo'
import SearchWrapper from './SearchWrapper/SearchWrapper'
import CarouselWrapper from './CarouselWrapper/CarouselWrapper'
export default function CarSearch() {
    const [scrollerPosition, setScrollerPosition] = useState(0)
    const [typedFirstPhrase,setTypedFirstPhrase ] = useState(false)

    const handleTypingFinished = () => {
        setTypedFirstPhrase(true)
        scrollerPosition < 5 ? setScrollerPosition(scrollerPosition + 1) : setScrollerPosition(0)
        console.log(`typedFirstPhrase is: ${typedFirstPhrase},
        scrollerPosition is: ${scrollerPosition}`)
    }

    return (
        <div className="CarSearch">
            <CarsnipLogo />
            <SearchWrapper onTypingEnd={handleTypingFinished} />
            <CarouselWrapper scrollerPosition={scrollerPosition} typedFirstPhrase={typedFirstPhrase} />
        </div>
    )
}
