import React from 'react'

export default function Rover({pos, directionDeg}) {

    const styles = {
        transform: `translate(${pos.x * 100}%, -${pos.y * 100}%) rotate(${directionDeg}deg)`
    }

    return (
        <div className="rover" style={styles}>Car</div>
    )
}
