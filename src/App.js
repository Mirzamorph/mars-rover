import React from 'react'
import Grid from './components/grid'
import {defaultGridSize} from './config'

export default function App() {
    return (
        <>
            <div className="container">
                <Grid gridCount={defaultGridSize}/>
                <div className="rover">Car</div>
            </div>
            <div>Console</div>
        </>
    )
}
