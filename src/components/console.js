import React, {useState} from 'react'
import validateCommand from '../services/validateCommand'
import {commands} from '../config'
// i know it looks ugly know :(
export default function Console({pos, setPos, direction, setDirection}) {

    const [cmd, setCmd] = useState('')

    const handleClick = () => {
        setCmd(validateCommand(cmd))

        cmd.split('').forEach(char => {
            setTimeout(() => {
                switch (char) {
                case commands.forward:
                    setPos(handleForward(direction))
                    break
                case commands.left:
                    setDirection(direction ? direction - 1 : 3)
                    break
                case commands.right:
                    setDirection((direction + 1) % 4)
                    break
            }
            }, 1000)
        })
    }

    const handleForward = (direction) => {
        const newPos = {...pos}

        switch (direction) {
            case 0:
                newPos.x++
                break
            case 1:
                newPos.y++
                break
            case 2:
                newPos.x--
                break
            case 3:
                newPos.y--
                break
        }

        return newPos
    }

    return (
        <>
            <input type="text" value={cmd} onChange={e => setCmd(e.target.value)}/>
            <button onClick={handleClick}>Run</button>
        </>
    )
}
