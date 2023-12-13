// Return the total price of the items in the basket. Sum of (value.price * amount)
export const calculateTotalFromBasket = (items) => {
    // console.log(" # Calucate Total Called # ")
    return items.reduce((acc, curr) => acc + curr.value.price * curr.amount, 0)
}
