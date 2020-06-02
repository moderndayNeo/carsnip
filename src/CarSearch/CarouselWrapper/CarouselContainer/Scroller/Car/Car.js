import React, { useState } from 'react'
import './Car.css'

export default function Car({ alt, src }) {
    const [centered, setCentered] = useState(false)
    return (
        <div className="Car">
            {centered && (
                <div>
                    <div className="Tooltip">Jaguar XK Convertible</div>
                    <svg
                        viewBox="0 0 25.9 25.9"
                        x="0px"
                        y="0px"
                        className="PulseDot"
                    >
                        <g>
                            <circle
                                cx={13}
                                cy="12.9"
                                r={5}
                                className="PulseDot__Circle"
                            />
                            <g className="PulseDot__G">
                                <path
                                    d="M13,7.9c2.8,0,5,2.2,5,5s-2.2,5-5,5s-5-2.2-5-5S10.2,7.9,13,7.9 M13-0.1c-7.2,0-13,5.8-13,13s5.8,13,13,13 s13-5.8,13-13S20.2-0.1,13-0.1L13-0.1z"
                                    className="PulseDot__Path"
                                />
                            </g>
                        </g>
                        <g>
                            <circle
                                cx={13}
                                cy="12.9"
                                r={5}
                                className="PulseDot__Circle"
                            />
                            <g className="PulseDot__G">
                                <path
                                    d="M13,7.9c2.8,0,5,2.2,5,5s-2.2,5-5,5s-5-2.2-5-5S10.2,7.9,13,7.9 M13,3.9c-5,0-9,4-9,9s4,9,9,9s9-4,9-9 S18,3.9,13,3.9L13,3.9z"
                                    className="PulseDot__Path"
                                />
                            </g>
                        </g>
                    </svg>
                </div>
            )}

            <img alt={alt} src={src} />
        </div>
    )
}
