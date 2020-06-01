import React from 'react'
import './DescriptionWrapper.css'
import DescriptionWrapperTitle from './DescriptionWrapperTitle/DescriptionWrapperTitle'
import Description from './Description/Description'

export default function DescriptionWrapper() {
    return (
        <div className="DescriptionWrapper">
             <DescriptionWrapperTitle />
             <Description />
                            
        </div>
    )
}
