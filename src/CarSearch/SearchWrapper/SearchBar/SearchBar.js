import React from 'react'
import './SearchBar.css'
import SpeechButton from './SpeechButton/SpeechButton'
import SearchBox from './SearchBox/SearchBox'
import SearchButton from './SearchButton/SearchButton'
import ReactRotatingText from 

export default function SearchBar() {
    return (
        <form role="search" method="get" action="/search" className="SearchBar">
            <SpeechButton />

            {!search && (
                <ReactRotatingText
                    items={[
                        'BMW X4 £14k Black',
                        'Petrol Hatchback Manual £12k',
                        '5 Door Petrol London Automatic',
                        '4x4 70,000 miles £15k Cardiff',
                        'Sports Convertible Blue £21k',
                    ]}
                    cursor=""
                    pause="5000"
                    emptyPause="1000"
                    className="ReactRotatingText"
                    typingInterval="150"
                    deletingInterval="60"
                />
            )}

            <SearchBox />

            <SearchButton />
        </form>
    )
}



