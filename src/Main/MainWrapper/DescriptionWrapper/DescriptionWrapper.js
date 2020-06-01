import React from 'react'
import './DescriptionWrapper.css'
import DescriptionWrapperTitle from './DescriptionWrapperTitle/DescriptionWrapperTitle'

export default function DescriptionWrapper() {
    return (
        <div className="DescriptionWrapper">
             <DescriptionWrapperTitle />
                                <p className="Description-tzqvdk-0 jjTxnN">
                                    Find your perfect car in as little as two
                                    clicks with Carsnip’s Magical Car Search™.
                                    With more{/* */}{' '}
                                    <a href="/used-cars" title="Used cars">
                                        cars for sale
                                    </a>{' '}
                                    {/* */}than any other UK car website,
                                    Carsnip combines simple car search with
                                    direct links to dealers to connect you with
                                    your perfect car faster.
                                </p>
        </div>
    )
}
