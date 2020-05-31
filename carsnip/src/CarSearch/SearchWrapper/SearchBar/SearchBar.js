import React from 'react'
import './SearchBar.css'
import SpeechButton from './SpeechButton/SpeechButton'
import SearchBox from './SearchBox/SearchBox'
import SearchButton from './SearchButton/SearchButton'

export default function SearchBar() {
    return (
        <form role="search" method="get" action="/search" className="SearchBar">
   
            <SpeechButton />
            <SearchBox />
            <SearchButton />
 
        </form>
    )
}
