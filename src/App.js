import React, {useState} from 'react'
import Grid from './components/grid'
import {defaultGridSize, defaultRoverDirection, defaultRoverPosition} from './config'
import Console from './components/console'
import Rover from './components/rover'

export default function App() {

    const [pos, setPos] = useState(defaultRoverPosition)
    const [direction, setDirection] = useState(defaultRoverDirection)


    return (
        <>
            <div className="container">
                <Grid gridCount={defaultGridSize}/>
                <Rover pos={pos} directionDeg={direction}/>
            </div>
            <button onClick={() => setPos({x: 4, y: 5})}>click</button>
            <Console setPos={setPos} setDirection={setDirection}/>
        </>
    )
}
