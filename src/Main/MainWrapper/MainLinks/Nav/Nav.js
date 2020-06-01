import React from 'react'
import './Nav.css'

export default function Nav({
    header,
    title1,
    href1,
    text,
    href2,
    text2,
    title2,
    href3,
    title3,
    text3,
    href4,
    title4,
    text4,
}) {
    return (
        <div className="Nav">
            <h4 className="NavHeader">{header}</h4>
            <ul className="List">
                <li className="Item">
                    <a title={title1} href={href1}>
                        {text}
                    </a>
                </li>
                <li className="Item">
                    <a href={href2} title={title2}>
                        {text2}
                    </a>
                </li>
                <li className="Item">
                    <a href={href3} title={title3}>
                        {text3}
                    </a>
                </li>
                <li className="Item">
                    <a href={href4} title={title4}>
                        {text4}
                    </a>
                </li>
            </ul>
        </div>
    )
}
