import { addBasketItem, removeBasketItem } from "../slices/basketSlice"

// Passing dispatch because you cannot call the hook here. Must be in the
// body of the function of a component (Rule of Hooks)

export const addItemToBasket = (dispatch, item) => {
    dispatch(addBasketItem(item))
}

export const removeItemFromBasket = (dispatch, id) => {
    dispatch(removeBasketItem(id))
}
