import React, { createContext, useState } from 'react'

export const CarouselContext = createContext()

export default function CarouselContextProvider(props) {

    const [test, setTest] = useState('orange')

    return (
        <CarouselContext.Provider>
            {props.children}
        </CarouselContext.Provider>
    )
}
