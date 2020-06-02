import React from 'react'
import './App.css'
import Header from './Header/Header'
import CarSearch from './CarSearch/CarSearch'
import ManufacturerCardsWrapper from './ManufacturerCardsWrapper/ManufacturerCardsWrapper'
import ManufacturerListWrapper from './ManufacturerListWrapper/ManufacturerListWrapper'
import Main from './Main/Main'
import Copyright from './Copyright/Copyright'

function App() {
    return (
        <div className="App">
            <section className="top">

            <Header />
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
