import React from 'react'
import './SearchWrapper.css'

export default function SearchWrapper() {
    return (
        <div className="SearchWrapper">
            <form
                role="search"
                method="get"
                action="/search"
                class="Form-sc-12qu49l-0 dOtcFp"
            >
                <button
                    type="button"
                    class="SpeechButton__Wrapper-x3deet-0 gGHiOt"
                >
                    <svg viewBox="0 0 216 312">
                        <g
                            id="Page-1"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                        >
                            <g
                                id="Microphone"
                                transform="translate(15.000000, 0.000000)"
                            >
                                <rect
                                    id="Rectangle"
                                    fill="#25AAAA"
                                    x="39"
                                    y="0"
                                    width="110"
                                    height="229"
                                    rx="55"
                                ></rect>
                                <path
                                    d="M0.498324245,199.220261 C16.1883209,235.003884 51.9250826,260 93.5,260 C134.006601,260 168.971227,236.271989 185.252687,201.957159"
                                    id="Oval-2"
                                    stroke="#25AAAA"
                                    stroke-width="30"
                                    stroke-linecap="round"
                                ></path>
                                <path
                                    d="M93,276 C93,301.048689 93,315.715356 93,320"
                                    id="Path-2"
                                    stroke="#25AAAA"
                                    stroke-width="30"
                                    stroke-linecap="round"
                                ></path>
                            </g>
                        </g>
                    </svg>
                </button>
                <input
                    type="text"
                    name="q"
                    class="Input-sc-184lz9n-0 fhWhAo cs-search-box"
                    autofocus=""
                    value=""
                    placeholder="Hatchback 5 Door Diesel"
                />
                    <button
                        type="submit"
                        class="Button-sc-8qh0i1-0 cBxdrf cs-search-button cs-button"
                        aria-label="Search"
                    >
                        <span class="ButtonWrap-sc-1vj0lun-0 eMYptg">
                            <span class="ButtonIcon-z7qqya-0 LJjsU cs-button-icon">
                                <svg
                                    x="0px"
                                    y="0px"
                                    viewBox="-95 -30 100.2 100"
                                >
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
                            <span class="Text-fly4x7-0 emXvQI cs-button-text">
                                Search
                            </span>
                        </span>
                    </button>
                </form>
            </div>
    )
}
