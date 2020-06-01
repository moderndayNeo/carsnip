import React from 'react'
import './Car.css'

export default function Car({ alt, src }) {
    return (
        <div className="Car">
            <img alt={alt} src={src} />
        </div>
    )
}
