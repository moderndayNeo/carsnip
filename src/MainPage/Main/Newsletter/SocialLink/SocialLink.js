import React from 'react'
import './SocialLink.css'

export default function SocialLink({ href1, title1, path1, path2, path3 }) {
    return (
        <a
            href={href1}
            rel="noopener noreferrer"
            target="_blank"
            title={title1}
            className="SocialLink"
        >
            <svg viewBox="0 0 52 28">
                <g>
                    <path
                        d={path1}
                        className="svg-outline"
                    />
                </g>
                <g>
                    <path d={path2} />
                </g>
                <g>
                    <path d={path3} />
                </g>
            </svg>
        </a>
    )
}
