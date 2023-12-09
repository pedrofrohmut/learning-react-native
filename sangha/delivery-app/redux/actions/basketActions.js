import { addBasketItem, removeBasketItem } from "../slices/basketSlice"

// Passing dispatch because you cannot call the hook here. Must be in the
// body of the function of a component (Rule of Hooks)

export const addItemToBasket = (dispatch, item) => {
    console.log("Hello, Add")
    dispatch(addBasketItem(item))
}

export const removeItemFromBasket = (dispatch, id) => {
    console.log("Hello, Remove")
    dispatch(removeBasketItem(id))
}
