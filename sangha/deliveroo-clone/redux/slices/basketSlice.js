import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    // item === { value, amount }
    items: []
}

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addBasketItem: (state, action) => {
            const itemInMenu = state.items.find((item) => item.value.id === action.payload.id)

            if (itemInMenu) {
                state.items = state.items.reduce((acc, curr) => {
                    if (curr.value.id === action.payload.id) {
                        return acc.concat({ value: curr.value, amount: curr.amount + 1 })
                    }
                    return acc.concat(curr)
                }, [])
            } else {
                state.items = [...state.items, { value: action.payload, amount: 1 }]
            }
        },
        removeBasketItem: (state, action) => {
            // Skip when empty basket
            if (state.items.length === 0) return

            state.items = state.items.reduce((acc, curr) => {
                if (curr.value.id === action.payload) {
                    if (curr.amount > 1) {
                        return acc.concat({ value: curr.value, amount: curr.amount - 1 })
                    }
                    // means: skip this item, removed from result array
                    return acc
                }
                return acc.concat(curr)
            }, [])
        }
    }
})

export const { addBasketItem, removeBasketItem } = basketSlice.actions

export const basketItemsSelector = (state) => state.basket.items

export const basketTotal = (state) =>
    state.basket.items.reduce((acc, curr) => acc + curr.value.price * curr.amount, 0)

export default basketSlice.reducer
