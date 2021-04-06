import React, {useState} from 'react'
import validateCommand from '../services/validateCommand'
import {commands} from '../config'
// i know it looks ugly now :(
export default function Console({pos, setPos}) {

    const [cmd, setCmd] = useState('')

    const handleClick = () => {
        setCmd(validateCommand(cmd))

        cmd.split('').forEach((l, i) => {
            setTimeout(() => {
                switch (l) {
                case commands.forward:
                    setPos(getNewPosition)
                    break
                case commands.left:
                    setPos(prev => {
                        return {
                            direction: prev.direction ? prev.direction - 1 : 3,
                            position: prev.position
                        }
                    })
                    break
                case commands.right:
                    setPos(prev => {
                        return {
                            direction: (prev.direction + 1) % 4,
                            position: prev.position
                        }
                    })
                    break
                }
                }, 1000 * i)
            })
    }



    const getNewPosition = ({direction, position}) => {
        const newPos = {...position}

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
        return {direction, position: newPos}
    }

    return (
        <>
            <input type="text" value={cmd} onChange={e => setCmd(e.target.value)}/>
            <button onClick={handleClick}>Run</button>
        </>
    )
}
