import React from 'react'
import './Car.css'
import Highlight from './Highlight/Highlight'

export default function Car({ alt, src }) {
    return (
        <div className="Car">
            <Highlight alt={alt} />
            <img alt={alt} src={src} />
        </div>
    )
}
