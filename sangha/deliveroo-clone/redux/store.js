import { configureStore } from "@reduxjs/toolkit"
import basket from "./slices/basketSlice"
import restaurant from "./slices/restaurantSlice"

const store = configureStore({
    reducer: {
        basket,
        restaurant
    }
})

export default store
