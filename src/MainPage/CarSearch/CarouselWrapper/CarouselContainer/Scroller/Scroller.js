import React, { useState, useEffect, useRef } from 'react'
import './Scroller.css'
import Car from './Car/Car'
import { carList } from './carList'

export default function Scroller({ scrollerPosition, typedFirstPhrase }) {
    const largeScreen = window.innerWidth >= 1024
    const carWidth = largeScreen ? 19.9375 : 10.25 // rem
    const [scrollerStyle, setScrollerStyle] = useState({})
    const containerRef = useRef(null)

    useEffect(() => {
        const centeredCar = containerRef.current.children[scrollerPosition + 6]
        const previousCar = centeredCar.previousSibling
        const lastCar = containerRef.current.children[11]

        if (scrollerPosition > -1) {
            centeredCar.children[0].classList.add('highlighted')
            centeredCar.classList.remove('transparent')
            previousCar.children[0].classList.remove('highlighted')
            previousCar.classList.add('transparent')
        }

        if (scrollerPosition === 0) {
            lastCar.children[0].classList.remove('highlighted')
            lastCar.classList.add('transparent')
        }
    }, [containerRef, scrollerPosition])

    useEffect(() => {
        setScrollerStyle({
            left: `calc(((50% -  ${largeScreen ? 119.625 : 61.5}rem) - ${
                typedFirstPhrase ? scrollerPosition * carWidth : -20
            }rem) - ${largeScreen ? 9.96875 : 6.125}rem)`,
            transition: `left ${
                typedFirstPhrase ? '1s ease' : '10s linear'
            } 0s`,
        })
    }, [scrollerPosition, typedFirstPhrase, carWidth, largeScreen])

    let allCars = []
    let sixCars = []
    carList.map(({ alt, src }, index) =>
        sixCars.push(
            <Car
                key={index}
                alt={alt}
                src={src}
                transparent={typedFirstPhrase}
            />
        )
    )

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
