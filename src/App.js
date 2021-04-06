import React, {useState} from 'react'
import Grid from './components/grid'
import {defaultGridSize, defaultRoverDirection, defaultRoverPosition} from './config'
import Console from './components/console'
import Rover from './components/rover'


// I should have used redux here but i have no time now
const intialState = {
    position: defaultRoverPosition,
    direction: defaultRoverDirection
}

export default function App() {

    const [pos, setPos] = useState(intialState)

    return (
        <>
            <div className="container">
                <Grid gridCount={defaultGridSize}/>
                <Rover pos={pos} />
            </div>
            <Console pos={pos} setPos={setPos} />
        </>
    )
}
