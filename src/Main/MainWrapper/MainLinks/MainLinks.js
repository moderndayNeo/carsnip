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
            <Nav
                header="USED CARS"
                href1="/used-cars"
                title1="All used cars"
                text="All used cars"
                href2="/used-cars#by-location"
                title2="Used cars by location"
                text2="Used cars by location"
                href3="/used-cars/body-style"
                title3="Used cars by body style"
                text3="Used cars by body style"
                href4="/used-cars#by-manufacturer"
                title4="Used cars by brand"
                text4="Used cars by brand"
            />
            <Nav
                header="DEALERS"
                href1="https://dealer.carsnip.com"
                title1="Dealer Portal"
                text="Dealer Portal"
                href2="/news"
                title2="UDealer news"
                text2="UDealer news"
                href3="/dealers"
                title3="Boost your stock"
                text3="Boost your stock"
                href4="https://docs.google.com/forms/d/e/1FAIpQLSc_n1nP58HQUomc-c3MxDqSDmt5yTRz8aTD8SrWqYpi9s9bYA/viewform?usp=sf_link"
                title4="List your stock"
                text4="List your stock"
                text5="FREE"
            />
        </section>
    )
}
