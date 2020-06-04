import React from 'react'
import './SearchBox.css'

export default function SearchBox({ onChange, search }) {
    return (
        <input
            type="text"
            name="q"
            autoFocus=""
            className="SearchBox"
            value={search}
            // placeholder="Hatchback 5 Door Diesel"
            onChange={onChange}
        />
    )
}

// test