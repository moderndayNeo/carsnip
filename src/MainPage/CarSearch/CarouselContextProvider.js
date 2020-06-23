import React, { createContext } from 'react'

export const CarouselContext = createContext()

export default function CarouselContextProvider(props) {
    return (
        <CarouselContext.Provider value={[1,2,3]}>
            {props.children}
        </CarouselContext.Provider>
    )
}
