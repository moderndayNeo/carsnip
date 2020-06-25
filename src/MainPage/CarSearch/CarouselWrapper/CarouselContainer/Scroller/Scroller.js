import React, { useState, useEffect, useRef } from 'react'
import './Scroller.css'
import Car from './Car/Car'
import {carList} from './carList'

export default function Scroller({ scrollerPosition, typedFirstPhrase }) {
    const carWidth = 10.25 // 10.25rem
    const [scrollerStyle, setScrollerStyle] = useState({
        left: `100px`, //remove when done editing tooltip class
    })
    const containerRef = useRef(null)

    useEffect(() => {
        const centeredCar = containerRef.current.children[scrollerPosition + 6]
        const previousCar = centeredCar.previousSibling

        if (scrollerPosition > -1) {
            centeredCar.classList.add('bordered')
            previousCar.classList.remove('bordered')
        }
    }, [containerRef, scrollerPosition])

    // useEffect(() => {
    //     setScrollerStyle({
    //         left: `calc(((50% - 61.5rem) - ${
    //             typedFirstPhrase ? scrollerPosition * carWidth : -20
    //         }rem) - 6.125rem)`,
    //         transition: `left ${
    //             typedFirstPhrase ? '1s ease' : '10s linear'
    //         } 0s`,
    //     })
    // }, [scrollerPosition, typedFirstPhrase])

    return (
        <div className="Scroller" style={scrollerStyle} ref={containerRef}>
            {
            carList.map(({ alt, src }, index) => (
                <Car key={index} alt={alt} src={src} />
            )) 
            }
   
        </div>
    )
}

/*
         <Car alt="Land Rover Discovery" src={landRoverDiscoveryImg} />
            <Car alt="Jaguar XK Convertible" src={jaguarXkConvertibleImg} />
            <Car alt="BMW X4" src={bmwX4Img} />
            <Car alt="Renault Clio" src={renaultClioImg} />
            <Car alt="Ford Fiesta" src={fordFiestaImg} />
            <Car alt="Volkswagen Golf" src={vwGolfImg} />

            <Car alt="Land Rover Discovery" src={landRoverDiscoveryImg} />
            <Car alt="Jaguar XK Convertible" src={jaguarXkConvertibleImg} />
            <Car alt="BMW X4" src={bmwX4Img} />
            <Car alt="Renault Clio" src={renaultClioImg} />
            <Car alt="Ford Fiesta" src={fordFiestaImg} />
            <Car alt="Volkswagen Golf" src={vwGolfImg} />

            <Car alt="Land Rover Discovery" src={landRoverDiscoveryImg} />
            <Car alt="Jaguar XK Convertible" src={jaguarXkConvertibleImg} />
            <Car alt="BMW X4" src={bmwX4Img} />
            <Car alt="Renault Clio" src={renaultClioImg} />
            <Car alt="Ford Fiesta" src={fordFiestaImg} />
            <Car alt="Volkswagen Golf" src={vwGolfImg} />
*/