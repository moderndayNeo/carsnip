import React, { useState, useEffect } from 'react'
import './SearchBar.css'
import SpeechButton from './SpeechButton/SpeechButton'
import SearchBox from './SearchBox/SearchBox'
import SearchButton from './SearchButton/SearchButton'
import ReactRotatingText from 'react-rotating-text'
import { focusOnSearchBox } from '../../../../carsnipFunctions'

export default function SearchBar({ onTypingEnd }) {
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(true)
    const updateSearch = (e) => {
        setSearch(e.target.value)
    }
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [loading])

    return (
        <form role="search" method="get" action="/search" className="SearchBar">
            <SpeechButton />
            {!loading && (
                <ReactRotatingText
                    items={[
                        '4x4 70,000 miles £15k Cardiff',
                        'Sports Convertible Blue £21k',
                        'BMW X4 £14k Black',
                        'Petrol Hatchback Manual £12k',
                        '5 Door Petrol London Automatic',
                        'Hatchback 5 Door Diesel',
                    ]}
                    cursor={false}
                    // pause={4000}
                    pause={1000}
                    emptyPause={1000}
                    className={`ReactRotatingText ${search && 'invisible'}`}
                    // typingInterval={140}
                    typingInterval={10}
                    deletingInterval={50}
                    onClick={focusOnSearchBox}
                    onTypingEnd={onTypingEnd}
                />
            )}
            <SearchBox onChange={(e) => updateSearch(e)} search={search} />
            <SearchButton />
        </form>
    )
}

/*
pause (integer)
(default: 1500)
The number of milliseconds to pause after the text has just finished being typed out.

emptyPause (integer)
(default: 1000)
The number of milliseconds to pause while no text is being displayed (i.e. after deleting has just finished).

typingInterval (integer)
(default: 50)
The number of milliseconds between each typing action.

deletingInterval (integer)
(default: 50)
The number of milliseconds between each deleting action.

Events
onTypingStart
A callback function to call when typing starts for current item.

onTypingEnd
A callback function to call when typing ends for current item.

onDeletingStart
A callback function to call when deleting starts for current item.

onDeletingEnd
A callback function to call when deleting finishes for current item.
*/
