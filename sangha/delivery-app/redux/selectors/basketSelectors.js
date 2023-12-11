// You cannot directly pass the value here because the useSelector must be
// in the function body of a component (Rule of Hooks)

// Return the list of items in the basket type Item { value, amount }
export const basketItemsSelector = (state) => state.basket.items

// Return the total price of the items in the basket. Sum of (value.price * amount)
export const basketTotalSelector = (state) =>
    state.basket.items.reduce((acc, curr) => acc + curr.value.price * curr.amount, 0)
