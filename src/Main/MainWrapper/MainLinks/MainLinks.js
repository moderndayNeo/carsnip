import React from 'react'
import './MainLinks.css'
import Nav from './Nav/Nav'

export default function MainLinks() {
    return (
        <section className="MainLinks">
            <Nav
                header="ABOUT"
                title1="Our Mission"
                href1="/about"
                text="Our Mission"
                href2="https://help.carsnip.com/hc/en-us"
                title2="Help & FAQ"
                text2="Help &amp; FAQ"
                href3="https://help.carsnip.com/hc/en-us/requests/new"
                title3="Contact us"
                text3="Contact us"
            />
            <Nav
                header="SERVICES"
                title1="Find your perfect car"
                href1="/"
                text="Find your perfect car"
                href2="/articles"
                title2="Articles"
                text2="Articles"
                href3="/car-advice"
                title3="Car Advice"
                text3="Car Advice"
                href4="/value-my-car"
                title4="Value my car"
                text4="Value my car"
            />



  

            <div className="Nav">
                <h4 className="NavHeader">USED CARS</h4>
                <ul className="List">
                    <li className="Item">
                        <a href="/used-cars" title="All used cars">
                            All used cars
                        </a>
                    </li>
                    <li className="Item">
                        <a
                            href="/used-cars#by-location"
                            title="Used cars by location"
                        >
                            Used cars by location
                        </a>
                    </li>
                    <li className="Item">
                        <a
                            href="/used-cars/body-style"
                            title="Used cars by body style"
                        >
                            Used cars by body style
                        </a>
                    </li>
                    <li className="Item">
                        <a
                            href="/used-cars#by-manufacturer"
                            title="Used cars by brand"
                        >
                            Used cars by brand
                        </a>
                    </li>
                </ul>
            </div>
            <div className="Nav">
                <h4 className="NavHeader">DEALERS</h4>
                <ul className="List">
                    <li className="Item">
                        <a
                            href="https://dealer.carsnip.com"
                            title="Dealer Portal"
                        >
                            Dealer Portal
                        </a>
                    </li>
                    <li className="Item">
                        <a href="/news" title="Dealer News">
                            Dealer news
                        </a>
                    </li>
                    <li className="Item">
                        <a title="Boost your stock" href="/dealers">
                            Boost your stock
                        </a>
                    </li>
                    <li className="Item">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSc_n1nP58HQUomc-c3MxDqSDmt5yTRz8aTD8SrWqYpi9s9bYA/viewform?usp=sf_link"
                            title="List your stock"
                        >
                            List your stock
                            <span className="Highlight-hbprqn-0 ihXiTp">
                                FREE
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}
