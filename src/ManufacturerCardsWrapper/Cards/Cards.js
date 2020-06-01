import React from 'react'
import './Cards.css'
import CardWrapper from './CardWrapper/CardWrapper'
import {
    bmwLogo,
    fordLogo,
    hyundaiLogo,
    landRoverLogo,
    mercedesBenzLogo,
    toyotaLogo,
    nissanLogo,
    skodaLogo,
    volkswagenLogo,
    vauxhallLogo,
    peugeotLogo,
    audiLogo,
} from '../..//Media/Images/manufacturer-cards-images'

export default function Cards() {
    return (
        <div className="Cards">
            <CardWrapper
                src={audiLogo}
                cardName='Audi'
                cardCount={'44,686'}
            />
            <CardWrapper src={bmwLogo} cardName={'BMW'} cardCount={'34,863'} />

            <CardWrapper
                src={fordLogo}
                cardName='Ford'
                cardCount={'57,394'}
            />
            <CardWrapper
                src={hyundaiLogo}
                cardName={'Hyundai'}
                cardCount={'34,259'}
            />
            <CardWrapper
                src={landRoverLogo}
                cardName={'Land Rover'}
                cardCount={'28,833'}
            />
            <CardWrapper
                src={mercedesBenzLogo}
                cardName={'Mercedes-Benz'}
                cardCount={'41,725'}
            />
            <CardWrapper
                src={nissanLogo}
                cardName={'Nissan'}
                cardCount={'27,670'}
            />
            <CardWrapper
                src={peugeotLogo}
                cardName={'Peugeot'}
                cardCount={'20,500'}
            />
            <CardWrapper
                src={skodaLogo}
                cardName={'Skoda'}
                cardCount={'20,396'}
            />
            <CardWrapper
                src={toyotaLogo}
                cardName={'Toyota'}
                cardCount={'30,641'}
            />
            <CardWrapper
                src={vauxhallLogo}
                cardName={'Vauxhall'}
                cardCount={'49,420'}
            />
            <CardWrapper
                src={volkswagenLogo}
                cardName={'Volkswagen'}
                cardCount={'59,242'}
            />
        </div>
    )
}
