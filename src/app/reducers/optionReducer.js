const {createSlice} = require('@reduxjs/toolkit')
const {defaultRoverDirection} = require('../../config')
const {defaultRoverPosition} = require('../../config')


const initialState = {
    position: defaultRoverPosition,
    direction: defaultRoverDirection,
}

const optionSlice = createSlice({
    name: 'option',
    initialState,
    reducers: {
        setX(state, action) {
          state.position.x = action.payload
        },
        setY(state, action) {
          state.position.y = action.payload
        },
        turnLeft(state) {
            state.direction--
        },
        turnRight(state) {
            state.direction++
        }
    }
})

export const {setX, setY, turnLeft, turnRight} = optionSlice.actions


export default optionSlice.reducer
