import React from 'react'
import './CarSearch.css'
import CarsnipLogo from './CarsnipLogo/CarsnipLogo'
import SearchWrapper from './SearchWrapper/SearchWrapper'
import CarouselWrapper from './CarouselWrapper/CarouselWrapper'
import ScrollIcon from './ScrollIcon/ScrollIcon'

export default function CarSearch() {
    return (
        <div className="CarSearch">
            <CarsnipLogo />
            <SearchWrapper />
            <CarouselWrapper />
            <ScrollIcon />
        </div>
    )
}
