import React from 'react'
import './App.css'
import Header from './Header/Header'
import CarSearch from './CarSearch/CarSearch'
import ManufacturerCardsWrapper from './ManufacturerCardsWrapper/ManufacturerCardsWrapper'
import ManufacturerListWrapper from './ManufacturerListWrapper/ManufacturerListWrapper'
import Main from './Main/Main'

function App() {
    return (
        <div className="App">
            <Header />
            <CarSearch />
            <ManufacturerCardsWrapper />
            <ManufacturerListWrapper />
            <Main />
        </div>
    )
}

export default App
