import axios from "axios"

import { THEMOVIEDB_API_KEY } from "./secret"

const BASE_URL = "https://api.themoviedb.org/3"

export const fallbackMoviePoster =
    "https://img.myloview.com/stickers/white-laptop-screen-with-hd-video-technology-icon-isolated-on-grey-background-abstract-circle-random-dots-vector-illustration-400-176057922.jpg"

export const fallbackPersonImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUiF-YGjavA63_Au8jQj7zxnFxS_Ay9xc6pxleMqCxH92SzeNSjBTwZ0l61E4B3KTS7o&usqp=CAU"

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

export const fetchMovieDetails = async (movieId) => {
    // Movie details url: https://api.themoviedb.org/3/movie/{movie_id}
    try {
        const response = await axios.get(
            `${BASE_URL}/movie/${movieId}?language=en-US&api_key=${THEMOVIEDB_API_KEY}`
        )
        return response.data
    } catch (e) {
        const errorMessage = "Error to fetch movies details. " + e
        console.error(errorMessage)
        return new Error(errorMessage)
    }
}

export const fetchMovieCast = async (movieId) => {
    // Movie credits url:  https://api.themoviedb.org/3/movie/{movie_id}/credits
    try {
        const response = await axios.get(
            `${BASE_URL}/movie/${movieId}/credits?language=en-US&api_key=${THEMOVIEDB_API_KEY}`
        )
        return response.data.cast
    } catch (e) {
        const errorMessage = "Error to fetch movies credits. " + e
        console.error(errorMessage)
        return new Error(errorMessage)
    }
}

export const fetchSimilarMovies = async (movieId) => {
    // Similar movies url:  https://api.themoviedb.org/3/movie/{movie_id}/similar
    try {
        const response = await axios.get(
            `${BASE_URL}/movie/${movieId}/similar?language=en-US&api_key=${THEMOVIEDB_API_KEY}`
        )
        return response.data.results
    } catch (e) {
        const errorMessage = "Error to fetch similar movies. " + e
        console.error(errorMessage)
        return new Error(errorMessage)
    }
}
