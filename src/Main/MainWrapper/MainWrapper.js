import React from 'react'
import './MainWrapper.css'
import DescriptionWrapper from './DescriptionWrapper/DescriptionWrapper'
import MainLinks from './MainLinks/MainLinks';

export default function MainWrapper() {
    return (
        <div className="MainWrapper">
            <DescriptionWrapper />
            <MainLinks />
        </div>
    )
}
