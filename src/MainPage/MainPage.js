import React from 'react'
import './MainPage.css'
import Header from './Header/Header'
import CarSearch from './CarSearch/CarSearch'
import ManufacturerCardsWrapper from './ManufacturerCardsWrapper/ManufacturerCardsWrapper'
import ManufacturerListWrapper from './ManufacturerListWrapper/ManufacturerListWrapper'
import Main from './Main/Main'
import Copyright from './Copyright/Copyright'

export default function MainPage({ onClick, popupMenuVisible }) {
    return (
        <div className={`MainPage ${popupMenuVisible && "faded"}`}>
            <section className="top">
                <Header onClick={onClick} />
                <CarSearch />
            </section>
            <ManufacturerCardsWrapper />
            <ManufacturerListWrapper />
            <Main />
            <Copyright />
        </div>
    )
}
