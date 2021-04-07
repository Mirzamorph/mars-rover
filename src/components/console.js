import React, {useEffect, useRef, useState} from 'react'
import validateCommand from '../services/validateCommand'
import useCommand from '../hooks/useCommand'
import {useDispatch} from 'react-redux'
import {setAll} from '../app/reducers/optionReducer'

export default function Console() {

    const dispatch = useDispatch()
    const getMovement = useCommand()
    const [value, setValue] = useState('')
    const [disabled, setDisable] = useState(false)
    const commands = useRef('')

    useEffect(() => {
        if (commands.current === '') {
            setDisable(false)
            return
        }

        const movementData = getMovement(commands.current[0])

        setTimeout(() => {
            dispatch(setAll(movementData))
        }, 400)

        commands.current = commands.current.substr(1)

    }, [getMovement, dispatch])

    const handleClick = () => {
        setValue(validateCommand(value))
        commands.current = value
        setDisable(true)
    }

    return (
        <div>
            <input type="text" value={value} onChange={e => setValue(e.target.value)} readOnly={disabled}/>
            <button onClick={handleClick} disabled={disabled}>Run</button>
        </div>
    )
}
