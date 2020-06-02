import React from 'react'
import './Copyright.css'
import Copy from './Copy/Copy'
import PolicyLinks from './PolicyLinks/PolicyLinks'

export default function Copyright() {
    return (
        <div className="Copyright">

            <div className="Container">

                <div className="CopyrightTop">
                    <Copy />
                    <PolicyLinks />


                
                </div>
            </div>
        </div>
    )
}
