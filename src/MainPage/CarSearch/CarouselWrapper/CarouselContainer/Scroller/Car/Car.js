import React from 'react'
import './Car.css'
import Highlight from './Highlight/Highlight'

export default function Car({ alt, src, transparent }) {
    return (
        <div className={`Car ${transparent && "transparent"}`}>
            <Highlight alt={alt} />
            <img alt={alt} src={src} />
        </div>
    )
}
