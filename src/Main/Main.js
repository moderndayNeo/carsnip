import React from 'react'
import './Main.css'
import MainWrapper from './MainWrapper/MainWrapper'
import Newsletter from './Newsletter/Newsletter'
import ImportantInfo from './ImportantInfo/ImportantInfo'

export default function Main() {
    return (
        <div className="Main">
            <div className="main-container">
                <MainWrapper />
                <Newsletter />
                <ImportantInfo />
   
 


            </div>
        </div>
    )
}
