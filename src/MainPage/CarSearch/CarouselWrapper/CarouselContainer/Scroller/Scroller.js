import React, { useState, useEffect } from 'react'
import './Scroller.css'
import Car from './Car/Car'
import {
    landRoverDiscoveryImg,
    fordFiestaImg,
    jaguarXkConvertibleImg,
    renaultClioImg,
    vwGolfImg,
    bmwX4Img,
} from '../../../../../Media/Images/scroller-car-images'

const carWidth = 10.25 // 10.25rem

export default function Scroller({ scrollerPosition, typedFirstPhrase }) {
    const [scrollerStyle, setScrollerStyle] = useState({})

    useEffect(() => {
        setScrollerStyle({
            left: `calc(((50% - 61.5rem) - ${typedFirstPhrase ? scrollerPosition * carWidth : -20}rem) - 6.125rem)`,
            transition: `left ${typedFirstPhrase ? '1s ease' : '10s linear'} 0s`
        })
    }, [scrollerPosition, typedFirstPhrase])

    return (
        <div className="Scroller" style={scrollerStyle}>
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
        </div>
    )
}

// <div className="Car">
//     <div className="Tooltip-laco3z-0 dDzZNL">
//         Land Rover Discovery
//     </div>
//     <svg
//         viewBox="0 0 25.9 25.9"
//         x="0px"
//         y="0px"
//         className="PulseDot__Svg-sc-7pujxs-0 jBBCQv"
//     >
//         <g>
//             <circle
//                 cx={13}
//                 cy="12.9"
//                 r={5}
//                 className="PulseDot__Circle-sc-7pujxs-1 jzZHoT"
//             />
//             <g className="PulseDot__G-sc-7pujxs-2 hybOec">
//                 <path
//                     d="M13,7.9c2.8,0,5,2.2,5,5s-2.2,5-5,5s-5-2.2-5-5S10.2,7.9,13,7.9 M13-0.1c-7.2,0-13,5.8-13,13s5.8,13,13,13 s13-5.8,13-13S20.2-0.1,13-0.1L13-0.1z"
//                     className="PulseDot__Path-sc-7pujxs-3 fvJyVi"
//                 />
//             </g>
//         </g>
//         <g>
//             <circle
//                 cx={13}
//                 cy="12.9"
//                 r={5}
//                 className="PulseDot__Circle-sc-7pujxs-1 jzZHoT"
//             />
//             <g className="PulseDot__G-sc-7pujxs-2 hybOec">
//                 <path
//                     d="M13,7.9c2.8,0,5,2.2,5,5s-2.2,5-5,5s-5-2.2-5-5S10.2,7.9,13,7.9 M13,3.9c-5,0-9,4-9,9s4,9,9,9s9-4,9-9 S18,3.9,13,3.9L13,3.9z"
//                     className="PulseDot__Path-sc-7pujxs-3 fvJyVi"
//                 />
//             </g>
//         </g>
//     </svg>
//     <img
//         alt="Land Rover Discovery"
//         src="/images/home/land_rover_discovery.jpg"
//     />
// </div>
// <div className="Car">
//     <div className="Tooltip-laco3z-0 dDzZNL">
//         Jaguar XK Convertible
//     </div>
//     <svg
//         viewBox="0 0 25.9 25.9"
//         x="0px"
//         y="0px"
//         className="PulseDot__Svg-sc-7pujxs-0 jBBCQv"
//     >
//         <g>
//             <circle
//                 cx={13}
//                 cy="12.9"
//                 r={5}
//                 className="PulseDot__Circle-sc-7pujxs-1 jzZHoT"
//             />
//             <g className="PulseDot__G-sc-7pujxs-2 hybOec">
//                 <path
//                     d="M13,7.9c2.8,0,5,2.2,5,5s-2.2,5-5,5s-5-2.2-5-5S10.2,7.9,13,7.9 M13-0.1c-7.2,0-13,5.8-13,13s5.8,13,13,13 s13-5.8,13-13S20.2-0.1,13-0.1L13-0.1z"
//                     className="PulseDot__Path-sc-7pujxs-3 fvJyVi"
//                 />
//             </g>
//         </g>
//         <g>
//             <circle
//                 cx={13}
//                 cy="12.9"
//                 r={5}
//                 className="PulseDot__Circle-sc-7pujxs-1 jzZHoT"
//             />
//             <g className="PulseDot__G-sc-7pujxs-2 hybOec">
//                 <path
//                     d="M13,7.9c2.8,0,5,2.2,5,5s-2.2,5-5,5s-5-2.2-5-5S10.2,7.9,13,7.9 M13,3.9c-5,0-9,4-9,9s4,9,9,9s9-4,9-9 S18,3.9,13,3.9L13,3.9z"
//                     className="PulseDot__Path-sc-7pujxs-3 fvJyVi"
//                 />
//             </g>
//         </g>
//     </svg>
//     <img
//         alt="Jaguar XK Convertible"
//         src="/images/home/jaguar_xk.jpg"
//     />
// </div>
// <div className="Car">
//     <div className="Tooltip-laco3z-0 dDzZNL">BMW X4</div>
//     <svg
//         viewBox="0 0 25.9 25.9"
//         x="0px"
//         y="0px"
//         className="PulseDot__Svg-sc-7pujxs-0 jBBCQv"
//     >
//         <g>
//             <circle
//                 cx={13}
//                 cy="12.9"
//                 r={5}
//                 className="PulseDot__Circle-sc-7pujxs-1 jzZHoT"
//             />
//             <g className="PulseDot__G-sc-7pujxs-2 hybOec">
//                 <path
//                     d="M13,7.9c2.8,0,5,2.2,5,5s-2.2,5-5,5s-5-2.2-5-5S10.2,7.9,13,7.9 M13-0.1c-7.2,0-13,5.8-13,13s5.8,13,13,13 s13-5.8,13-13S20.2-0.1,13-0.1L13-0.1z"
//                     className="PulseDot__Path-sc-7pujxs-3 fvJyVi"
//                 />
//             </g>
//         </g>
//         <g>
//             <circle
//                 cx={13}
//                 cy="12.9"
//                 r={5}
//                 className="PulseDot__Circle-sc-7pujxs-1 jzZHoT"
//             />
//             <g className="PulseDot__G-sc-7pujxs-2 hybOec">
//                 <path
//                     d="M13,7.9c2.8,0,5,2.2,5,5s-2.2,5-5,5s-5-2.2-5-5S10.2,7.9,13,7.9 M13,3.9c-5,0-9,4-9,9s4,9,9,9s9-4,9-9 S18,3.9,13,3.9L13,3.9z"
//                     className="PulseDot__Path-sc-7pujxs-3 fvJyVi"
//                 />
//             </g>
//         </g>
//     </svg>
//     <img alt="BMW X4" src="/images/home/bmw_x4.jpg" />
// </div>
// <div className="Car">
//     <div className="Tooltip-laco3z-0 dDzZNL">Renault Clio</div>
//     <svg
//         viewBox="0 0 25.9 25.9"
//         x="0px"
//         y="0px"
//         className="PulseDot__Svg-sc-7pujxs-0 jBBCQv"
//     >
//         <g>
//             <circle
//                 cx={13}
//                 cy="12.9"
//                 r={5}
//                 className="PulseDot__Circle-sc-7pujxs-1 jzZHoT"
//             />
//             <g className="PulseDot__G-sc-7pujxs-2 hybOec">
//                 <path
//                     d="M13,7.9c2.8,0,5,2.2,5,5s-2.2,5-5,5s-5-2.2-5-5S10.2,7.9,13,7.9 M13-0.1c-7.2,0-13,5.8-13,13s5.8,13,13,13 s13-5.8,13-13S20.2-0.1,13-0.1L13-0.1z"
//                     className="PulseDot__Path-sc-7pujxs-3 fvJyVi"
//                 />
//             </g>
//         </g>
//         <g>
//             <circle
//                 cx={13}
//                 cy="12.9"
//                 r={5}
//                 className="PulseDot__Circle-sc-7pujxs-1 jzZHoT"
//             />
//             <g className="PulseDot__G-sc-7pujxs-2 hybOec">
//                 <path
//                     d="M13,7.9c2.8,0,5,2.2,5,5s-2.2,5-5,5s-5-2.2-5-5S10.2,7.9,13,7.9 M13,3.9c-5,0-9,4-9,9s4,9,9,9s9-4,9-9 S18,3.9,13,3.9L13,3.9z"
//                     className="PulseDot__Path-sc-7pujxs-3 fvJyVi"
//                 />
//             </g>
//         </g>
//     </svg>
//     <img alt="Renault Clio" src="/images/home/renault_clio.jpg" />
// </div>
// <div className="Car">
//     <div className="Tooltip-laco3z-0 dDzZNL">Ford Fiesta</div>
//     <svg
//         viewBox="0 0 25.9 25.9"
//         x="0px"
//         y="0px"
//         className="PulseDot__Svg-sc-7pujxs-0 jBBCQv"
//     >
//         <g>
//             <circle
//                 cx={13}
//                 cy="12.9"
//                 r={5}
//                 className="PulseDot__Circle-sc-7pujxs-1 jzZHoT"
//             />
//             <g className="PulseDot__G-sc-7pujxs-2 hybOec">
//                 <path
//                     d="M13,7.9c2.8,0,5,2.2,5,5s-2.2,5-5,5s-5-2.2-5-5S10.2,7.9,13,7.9 M13-0.1c-7.2,0-13,5.8-13,13s5.8,13,13,13 s13-5.8,13-13S20.2-0.1,13-0.1L13-0.1z"
//                     className="PulseDot__Path-sc-7pujxs-3 fvJyVi"
//                 />
//             </g>
//         </g>
//         <g>
//             <circle
//                 cx={13}
//                 cy="12.9"
//                 r={5}
//                 className="PulseDot__Circle-sc-7pujxs-1 jzZHoT"
//             />
//             <g className="PulseDot__G-sc-7pujxs-2 hybOec">
//                 <path
//                     d="M13,7.9c2.8,0,5,2.2,5,5s-2.2,5-5,5s-5-2.2-5-5S10.2,7.9,13,7.9 M13,3.9c-5,0-9,4-9,9s4,9,9,9s9-4,9-9 S18,3.9,13,3.9L13,3.9z"
//                     className="PulseDot__Path-sc-7pujxs-3 fvJyVi"
//                 />
//             </g>
//         </g>
//     </svg>
//     <img alt="Ford Fiesta" src="/images/home/ford_fiesta.jpg" />
// </div>
// <div className="Car">

//     <div className="Tooltip-laco3z-0 dDzZNL">Volkswagen Golf</div>
//     <svg
//         viewBox="0 0 25.9 25.9"
//         x="0px"
//         y="0px"
//         className="PulseDot__Svg-sc-7pujxs-0 jBBCQv"
//     >
//         <g>
//             <circle
//                 cx={13}
//                 cy="12.9"
//                 r={5}
//                 className="PulseDot__Circle-sc-7pujxs-1 jzZHoT"
//             />
//             <g className="PulseDot__G-sc-7pujxs-2 hybOec">
//                 <path
//                     d="M13,7.9c2.8,0,5,2.2,5,5s-2.2,5-5,5s-5-2.2-5-5S10.2,7.9,13,7.9 M13-0.1c-7.2,0-13,5.8-13,13s5.8,13,13,13 s13-5.8,13-13S20.2-0.1,13-0.1L13-0.1z"
//                     className="PulseDot__Path-sc-7pujxs-3 fvJyVi"
//                 />
//             </g>
//         </g>
//         <g>
//             <circle
//                 cx={13}
//                 cy="12.9"
//                 r={5}
//                 className="PulseDot__Circle-sc-7pujxs-1 jzZHoT"
//             />
//             <g className="PulseDot__G-sc-7pujxs-2 hybOec">
//                 <path
//                     d="M13,7.9c2.8,0,5,2.2,5,5s-2.2,5-5,5s-5-2.2-5-5S10.2,7.9,13,7.9 M13,3.9c-5,0-9,4-9,9s4,9,9,9s9-4,9-9 S18,3.9,13,3.9L13,3.9z"
//                     className="PulseDot__Path-sc-7pujxs-3 fvJyVi"
//                 />
//             </g>
//         </g>
//     </svg>
//     <img alt="Volkswagen Golf" src="/images/home/vw_golf.jpg" />
// </div>
