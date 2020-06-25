import React, { useState, useEffect, useRef } from 'react'
import './Scroller.css'
import Car from './Car/Car'
import { carList } from './carList'

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
            centeredCar.children[0].classList.add('highlighted')
            previousCar.children[0].classList.remove('highlighted')
        }
    }, [containerRef, scrollerPosition])

    useEffect(() => {
        setScrollerStyle({
            left: `calc(((50% - 61.5rem) - ${
                typedFirstPhrase ? scrollerPosition * carWidth : -20
            }rem) - 6.125rem)`,
            transition: `left ${
                typedFirstPhrase ? '1s ease' : '10s linear'
            } 0s`,
        })
    }, [scrollerPosition, typedFirstPhrase])


    let allCars = []
    let sixCars = []
    carList.map(({alt, src}, index) => (
        sixCars.push(<Car
            key={index}
            alt={alt}
            src={src}
        />)
    ))
    
    for (let i = 0; i < 3; i++) {
        allCars.push(sixCars)
    }

    return (
        <div className="Scroller" style={scrollerStyle} ref={containerRef}>
            {allCars}
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
