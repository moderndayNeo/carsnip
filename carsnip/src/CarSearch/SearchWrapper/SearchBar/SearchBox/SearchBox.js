import React from 'react'
import './SearchBox.css'


export default function SearchBox() {
    return (
               <input
                type="text"
                name="q"
                autofocus=""
                className="SearchBox"
                value=""
                placeholder="Hatchback 5 Door Diesel"
            />
    )
}
