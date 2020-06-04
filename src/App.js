import React, { useState } from 'react'
import './App.css'
import MainPage from './MainPage/MainPage'
import PopupMenu from './PopupMenu/PopupMenu'

function App() {
    const [popupMenuVisible, setPopupMenuVisible] = useState(false)

    const toggleMenu = () => {
        setPopupMenuVisible(!popupMenuVisible)
        console.log(popupMenuVisible)
    }

    return (
        <div className="App">
            {popupMenuVisible && <PopupMenu />}
            {/* <MainPage
                onClick={toggleMenu}
                popupMenuVisible={popupMenuVisible}
            /> */}
        </div>
    )
}

export default App
/*
 Click MenuButton
 Push the MainPage to the right, the width of the popupMenu
 Apply a dark filter to the MainPage
 Apply a click event listener. If user clicks on mainpage, then the popupmenu disappears

Popupmenu slides in from left

 */
