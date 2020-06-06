import React from 'react'
import './SearchBox.css'

export default function SearchBox({ onChange, search, loading }) {
    const placeholder = 'All the cars in one place...'
    const searchBoxIsFocused = () => document.activeElement.className === "SearchBox"
    console.log(loading)
    console.log(loading && !searchBoxIsFocused())

    return (
        <input
            type="text"
            name="q"
            autoFocus={true}
            className="SearchBox"
            value={search}
            // placeholder={ loading && !searchBoxIsFocused() ? placeholder : '' }
            placeholder={''}
            onChange={onChange}
        />
    )
}