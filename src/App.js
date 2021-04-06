import React, {useState} from 'react'
import Grid from './components/grid'
import {defaultGridSize, defaultRoverPosition} from './config'
import Console from './components/console'
import Rover from './components/rover'

export default function App() {

    const [pos, setPos] = useState(defaultRoverPosition)


    return (
        <>
            <div className="container">
                <Grid gridCount={defaultGridSize}/>
                <Rover pos={pos}/>
            </div>
            <Console/>
        </>
    )
}
