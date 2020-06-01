import React from 'react'
import './ManufacturerListWrapper.css'
import ManufacturerListTitle from './ManufacturerListTitle/ManufacturerListTitle'
import ListWrapper from './ListWrapper/ListWrapper'
import ManufacturerViewMore from './ManufacturerViewMore/ManufacturerViewMore'

export default function ManufacturerListWrapper() {
    return (
        <div className="ManufacturerListWrapper">
            <ManufacturerListTitle />
            <ListWrapper />
            <ManufacturerViewMore />
        </div>
    )
}
