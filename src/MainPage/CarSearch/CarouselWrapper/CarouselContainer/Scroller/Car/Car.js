import React, { useState, useEffect } from 'react'
import './Car.css'
import Highlight from './Highlight/Highlight'

export default function Car({ alt, src }) {
    const [centered, setCentered] = useState(true)

    return (
        <div className="Car">
            {centered && <Highlight alt={alt} />}
            <img alt={alt} src={src} />
        </div>
    )
}
