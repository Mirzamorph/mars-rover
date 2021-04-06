import React from 'react'
import Grid from './components/grid'
import {defaultGridSize} from './config'

export default function App() {
    return (
        <>
            <Grid gridCount={defaultGridSize}/>
            <div>Car</div>
            <div>Console</div>
        </>
    )
}
