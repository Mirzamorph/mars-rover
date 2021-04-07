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
        setPos(state, action) {
            state.position = action.payload
        },
        setDirection(state, action) {
            state.direction = action.payload
        },
        setAll(state, action) {
            state.position = action.payload.position
            state.direction = action.payload.direction
        }
    }
})

export const {setAll, setPos, setDirection} = optionSlice.actions


export default optionSlice.reducer
