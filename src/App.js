import React, { useState } from 'react'
import './App.css'
import MainPage from './MainPage/MainPage'
import PopupMenu from './PopupMenu/PopupMenu'

function App() {
    const [popupMenuVisible, setPopupMenuVisible] = useState(false)

    const toggleMenu = () => {
        setPopupMenuVisible(!popupMenuVisible)
    }

    return (
        <div className="App">
            <PopupMenu popupMenuVisible={popupMenuVisible} />
            <MainPage
                onClick={toggleMenu}
                popupMenuVisible={popupMenuVisible}
            />
        </div>
    )
}

export default App
/*
 */
