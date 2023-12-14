import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
}

const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload
        },
        setDestination: (state, action) => {
            state.destination = action.payload
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload
        }
    }
})

export const navActions = navSlice.actions

export const navSelectors = {
    origin: (state) => state.origin,
    destination: (state) => state.destination,
    travelTimeInformation: (state) => state.travelTimeInformation
}

export const navReducer = navSlice.reducer
