import React from 'react'
import './SearchButton.css'

export default function SearchButton() {
    return (
        <button type="submit" className="SearchButton" aria-label="Search">
            <span class="ButtonWrap-sc-1vj0lun-0 eMYptg">
                <span class="ButtonIcon-z7qqya-0 LJjsU cs-button-icon">
                    <svg x="0px" y="0px" viewBox="-95 -30 100.2 100">
                        <g id="icomoon-ignore"></g>
                        <circle
                            id="XMLID_6_"
                            cx="-50.8"
                            cy="14.2"
                            r="37.8"
                            class="SearchIcon__Circle-sc-1uh6zx9-0 hecpyV"
                        ></circle>
                        <g
                            id="XMLID_1_"
                            class="SearchIcon__Line-sc-1uh6zx9-1 kgxyHa"
                        >
                            <path d="M2.9,67.8c-2.9,2.9-7.8,2.8-11-0.4l-18.9-18.9c-3.1-3.1-3.3-8-0.4-11s7.8-2.8,11,0.4L2.6,56.9 C5.7,60,5.8,64.9,2.9,67.8z"></path>
                        </g>
                    </svg>
                </span>
                <span class="Text-fly4x7-0 emXvQI cs-button-text">Search</span>
            </span>
        </button>
    )
}
