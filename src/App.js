import React from 'react'
import Grid from './components/grid'
import Rover from './components/rover'
import Console from './components/console'
import {defaultGridSize} from './config'


export default function App() {

    return (
        <>
            <div className="container">
                <Grid gridCount={defaultGridSize} />
                <Rover />
            </div>
            <Console />
        </>
    )
}
