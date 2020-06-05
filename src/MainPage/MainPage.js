import React from 'react'
import './MainPage.css'
import Header from './Header/Header'
import CarSearch from './CarSearch/CarSearch'
import ManufacturerCardsWrapper from './ManufacturerCardsWrapper/ManufacturerCardsWrapper'
import ManufacturerListWrapper from './ManufacturerListWrapper/ManufacturerListWrapper'
import Main from './Main/Main'
import Copyright from './Copyright/Copyright'
import Overlay from './Overlay/Overlay'

export default function MainPage({ onClick, popupMenuVisible }) {
    return (
        <div className={`MainPage ${popupMenuVisible && 'faded'}`}>
            {popupMenuVisible && <Overlay onClick={onClick} />}
            <section className="top">
                <Header onClick={onClick} popupMenuVisible={popupMenuVisible} />
                <CarSearch />
            </section>
            <ManufacturerCardsWrapper />
            <ManufacturerListWrapper />
            <Main />
            <Copyright />
        </div>
    )
}
