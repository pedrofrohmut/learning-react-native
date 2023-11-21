import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    restaurant: {
        id: null,
        imageUrl: null,
        title: null,
        rating: null,
        genre: null,
        address: null,
        shortDescription: null,
        dishes: null,
    }
}

const restaurantSlice = createSlice({
    name: "restaurant",
    initialState,
    reducers: {
        setRestaurant: (state, action) => {
            state.restaurant = action.payload
        }
    }
})

export const { setRestaurant } = restaurantSlice.actions

export const restaurantSelector = (state) => state.restaurant.restaurant

export default restaurantSlice.reducer
