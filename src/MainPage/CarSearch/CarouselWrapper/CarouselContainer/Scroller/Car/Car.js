import React, { useState, useEffect } from 'react'
import './Car.css'
import Highlight from './Highlight/Highlight'

export default function Car({ alt, src, highlighted }) {
    return (
        <div className="Car">
            {highlighted && <Highlight alt={alt} />}
            <img alt={alt} src={src} />
        </div>
    )
}
