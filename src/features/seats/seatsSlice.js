import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    items: [],
    status: 'idle',
    error: null
}
export const fetchSeats = createAsyncThunk('seats/fetchSeats', async () => {
    const response = await fetch('http://localhost:3000/seats')
    return response.json()
})
export const seatsSlice = createSlice({
    name: 'seats',
    initialState,
    reducers: {
        reservationAdded(state, action) {
            action.payload.forEach((seat)=>{
                const seatToReserve=state.items.find((item) => item.id === seat.id)
                seatToReserve.reserved = true;
            })
        },
    },
    extraReducers: {
        [fetchSeats.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchSeats.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.items = state.items.concat(action.payload)
        },
        [fetchSeats.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        }
    }
})
export const { reservationAdded } =seatsSlice.actions;
export default seatsSlice.reducer
export const selectSeats = (state) => state.seats;
