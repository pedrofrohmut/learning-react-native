// You cannot directly pass the value here because the useSelector must be
// in the function body of a component (Rule of Hooks)

// Return the list of items in the basket type Item { value, amount }
export const basketItemsSelector = (state) => state.basket.items
