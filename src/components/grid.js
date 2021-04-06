import React from 'react'

export default function Grid({gridCount}) {

    const generateRow = () => {
        return new Array(gridCount).fill(0).map((_, index) => (
            <div className="row" key={index}>{generateCol()}</div>
        ))
    }

    const generateCol = () => {
        return new Array(gridCount).fill(0).map((_, index) => (
            <div className="col" key={index}/>
        ))
    }

    return (
        <div className="grid">
            {generateRow()}
        </div>
    )
}
