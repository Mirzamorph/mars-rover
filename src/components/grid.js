import React from 'react'

export default function Grid({gridCount}) {

    const generateRow = () => {
        return new Array(gridCount).fill(0).map(_ => (
            <div className="row">{generateCol()}</div>
        ))
    }

    const generateCol = () => {
        return new Array(gridCount).fill(0).map(_ => (
            <div className="col"/>
        ))
    }

    return (
        <div className="grid">
            {generateRow()}
        </div>
    )
}
