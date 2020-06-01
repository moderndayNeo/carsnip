import React from 'react'
import './SearchButton.css'

export default function SearchButton() {
    return (
        <button type="submit" className="SearchButton" aria-label="Search">
            <span className="ButtonWrap">
                <span className="ButtonIcon">
                    <svg x="0px" y="0px" viewBox="-95 -30 100.2 100">
                        <g id="icomoon-ignore"></g>
                        <circle
                            id="XMLID_6_"
                            cx="-50.8"
                            cy="14.2"
                            r="37.8"
                            className="circle"
                        ></circle>
                        <g
                            id="XMLID_1_"
                            className="line"
                        >
                            <path d="M2.9,67.8c-2.9,2.9-7.8,2.8-11-0.4l-18.9-18.9c-3.1-3.1-3.3-8-0.4-11s7.8-2.8,11,0.4L2.6,56.9 C5.7,60,5.8,64.9,2.9,67.8z"></path>
                        </g>
                    </svg>
                </span>
            </span>
        </button>
    )
}
