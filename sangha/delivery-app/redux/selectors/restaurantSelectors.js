/*
 * Return the current restaurant
 *
 * type Restaurent {
 *     id: null,
 *     imageUrl: null,
 *     title: null,
 *     rating: null,
 *     genre: null,
 *     address: null,
 *     shortDescription: null,
 *     dishes: null
 * }
 */
export const restaurantSelector = (state) => state.restaurant.restaurant
