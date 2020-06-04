import React, { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import CarSearch from './CarSearch/CarSearch'
import ManufacturerCardsWrapper from './ManufacturerCardsWrapper/ManufacturerCardsWrapper'
import ManufacturerListWrapper from './ManufacturerListWrapper/ManufacturerListWrapper'
import Main from './Main/Main'
import Copyright from './Copyright/Copyright'

function App() {
    const [popupMenuVisible, setPopupMenuVisible] = useState(false)

    const toggleMenu = () => {
        setPopupMenuVisible(!popupMenuVisible)
        console.log(popupMenuVisible)
    }

    return (
        <div className="App">
            <section className="top">
                <Header onClick={toggleMenu} />
                <CarSearch />
            </section>
            <ManufacturerCardsWrapper />
            <ManufacturerListWrapper />
            <Main />
            <Copyright />
        </div>
    )
}

export default App
