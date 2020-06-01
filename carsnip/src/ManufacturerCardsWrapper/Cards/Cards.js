import React from 'react'
import './Cards.css'
import CardWrapper from './CardWrapper/CardWrapper'
import { bmwLogo } from '../..//Media/Images/manufacturer-cards-images'

export default function Cards() {
    return (
        <div className="Cards">    
        <img src={bmwLogo} alt=""/>     
         <CardWrapper  src={bmwLogo} cardName={'BMW'} cardCount={'34,863'} />
         <CardWrapper  src={''} cardName={'Ford'} cardCount={'57,394'} />
         <CardWrapper src={''} cardName={'Hyundai'} cardCount={'34,259'} />
         <CardWrapper src={''} cardName={'Land Rover'} cardCount={'28,833'} />
         <CardWrapper src={''} cardName={'Mercedes-Benz'} cardCount={'41,725'} />
         <CardWrapper src={''} cardName={'Nissan'} cardCount={'27,670'} />
         <CardWrapper src={''} cardName={'Peugeot'} cardCount={'20,500'} />
         <CardWrapper src={''} cardName={'Skoda'} cardCount={'20,396'} />
         <CardWrapper src={''} cardName={'Toyota'} cardCount={'30,641'} />
         <CardWrapper src={''} cardName={'Vauxhall'} cardCount={'49,420'} />
         <CardWrapper src={''} cardName={'Volkswagen'} cardCount={'59,242'} />
        </div>
    )
}
