import React from 'react'
import './CarSearch.css'
import CarsnipLogo from './CarsnipLogo/CarsnipLogo'
import SearchWrapper from './SearchWrapper/SearchWrapper'

export default function CarSearch() {
    return (
        <div className="CarSearch">
            <CarsnipLogo />
            <SearchWrapper />
        </div>
    )
}
