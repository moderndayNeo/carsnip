import React, { useState } from 'react'
import './SearchBox.css'


export default function SearchBox() {
    const [search, setSearch] = useState("")

    const updateSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
               <input
                type="text"
                name="q"
                autoFocus=""
                className="SearchBox"
                value={search}
                placeholder="Hatchback 5 Door Diesel"
                onChange={e => updateSearch(e)}
            />
    )
}
