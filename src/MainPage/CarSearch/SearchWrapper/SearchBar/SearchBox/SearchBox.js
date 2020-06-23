import React from 'react'
import './SearchBox.css'
// import { CarouselContext } from '../../../CarouselContextProvider';

export default function SearchBox({ onChange, search }) {
    return (
        <input
            type="text"
            name="q"
            autoFocus={true}
            className="SearchBox"
            value={search}
            placeholder={''}
            onChange={onChange}
        />
    )
}
