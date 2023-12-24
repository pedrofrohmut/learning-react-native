import axios from "axios"

import { THEMOVIEDB_API_KEY } from "./secret"

const BASE_URL = "https://api.themoviedb.org/3"

export const imageUriOriginal = (path) => (path ? "https://image.tmdb.org/t/p/original" + path : "")

export const imageUri500 = (path) => (path ? "https://image.tmdb.org/t/p/w500" + path : "")

export const imageUri342 = (path) => (path ? "https://image.tmdb.org/t/p/w342" + path : "")

export const imageUri185 = (path) => (path ? "https://image.tmdb.org/t/p/w185" + path : "")

export const fetchTrendingMovies = async () => {
    // Trending movies url: /trending/movie/day?language=en-US
    try {
        const response = await axios.get(
            `${BASE_URL}/trending/movie/day?language=en-US&api_key=${THEMOVIEDB_API_KEY}`
        )
        return response.data.results
    } catch (e) {
        const errorMessage = "Error to fetch trending movies. " + e
        console.error(errorMessage)
        return new Error(errorMessage)
    }
}

export const fetchUpcomingMovies = async () => {
    // Upcoming movies url: /movie/upcoming?language=en-US&page=1
    try {
        const response = await axios.get(
            `${BASE_URL}/movie/upcoming?language=en&page=1&api_key=${THEMOVIEDB_API_KEY}`
        )
        return response.data.results
    } catch (e) {
        const errorMessage = "Error to fetch upcoming movies. " + e
        console.error(errorMessage)
        return new Error(errorMessage)
    }
}

export const fetchTopRatedMovies = async () => {
    // Top rated url: /movie/top_rated?language=en-US&page=1
    try {
        const response = await axios.get(
            `${BASE_URL}/movie/top_rated?language=en-US&page=1&api_key=${THEMOVIEDB_API_KEY}`
        )
        return response.data.results
    } catch (e) {
        const errorMessage = "Error to fetch top rated movies. " + e
        console.error(errorMessage)
        return new Error(errorMessage)
    }
}
