import React from 'react'
import './SearchBox.css'

export default function SearchBox({ onChange, search, loading }) {

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
