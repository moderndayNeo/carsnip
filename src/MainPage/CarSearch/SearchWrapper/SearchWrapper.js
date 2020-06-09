import React from 'react'
import './SearchWrapper.css'
import SearchBar from './SearchBar/SearchBar'

export default function SearchWrapper({ onTypingEnd }) {
    return (
        <div className="SearchWrapper">
              <SearchBar onTypingEnd={onTypingEnd} />

            </div>
    )
}
