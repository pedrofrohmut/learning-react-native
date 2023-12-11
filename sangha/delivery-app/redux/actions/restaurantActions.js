import { setRestaurant } from "../slices/restaurantSlice"

// Passing dispatch because you cannot call the hook here. Must be in the
// body of the function of a component (Rule of Hooks)

export const storeRestaurant = (dispatch, restaurant) => {
    dispatch(setRestaurant(restaurant))
}
