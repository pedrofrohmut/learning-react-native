import axios from "axios"

import { THEMOVIEDB_ACCESS_TOKEN } from "./secret"

import StubTrendingMovies from "../stub-data/trending-movies"
import StubUpcomingMovies from "../stub-data/upcoming-movies"
import StubTopRatedMovies from "../stub-data/top-rated-movies"
import StubMovieDetails from "../stub-data/movie-details"
import StubMovieCast from "../stub-data/movie-cast"
import StubSimilarMovies from "../stub-data/similar-movies"
import StubPersonDetails from "../stub-data/person-details"
import StubPersonMovies from "../stub-data/person-movies"
import StubSearchMovie from "../stub-data/search-movie"
import StubSearchKeyword from "../stub-data/search-keyword"

// Variable to set Online or Offiline state for the API calls
// 1. Offline is good for ajusting the UI without making thousands of requests
// 2. Online to test the funcionality of App
const IS_OFFLINE = false

const BASE_URL = "https://api.themoviedb.org/3"

const headers = {
    accept: "application/json",
    Authorization: `Bearer ${THEMOVIEDB_ACCESS_TOKEN}`
}

export const fallbackMoviePoster =
    "https://img.myloview.com/stickers/white-laptop-screen-with-hd-video-technology-icon-isolated-on-grey-background-abstract-circle-random-dots-vector-illustration-400-176057922.jpg"

export const fallbackPersonImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUiF-YGjavA63_Au8jQj7zxnFxS_Ay9xc6pxleMqCxH92SzeNSjBTwZ0l61E4B3KTS7o&usqp=CAU"

export const imageUriOriginal = (path) => (path ? "https://image.tmdb.org/t/p/original" + path : "")

export const imageUri500 = (path) => (path ? "https://image.tmdb.org/t/p/w500" + path : "")

export const imageUri342 = (path) => (path ? "https://image.tmdb.org/t/p/w342" + path : "")

export const imageUri185 = (path) => (path ? "https://image.tmdb.org/t/p/w185" + path : "")

// id table at: https://developer.themoviedb.org/reference/person-details
export const getStringFromGenderId = (genderId) => {
    switch (parseInt(genderId)) {
        case 0:
            return "Not set / Not specified"
        case 1:
            return "Female"
        case 2:
            return "Male"
        case 3:
            return "Non-binary"
    }
}

// Trending movies url: /trending/movie/day?language=en-US
export const fetchTrendingMovies = async () => {
    if (IS_OFFLINE) return StubTrendingMovies.results
    try {
        const response = await axios.get(`${BASE_URL}/trending/movie/day?language=en-US`, {
            headers
        })
        return response.data.results
    } catch (e) {
        const errorMessage = "Error to fetch trending movies. " + e
        console.error(errorMessage)
        return new Error(errorMessage)
    }
}

// Upcoming movies url: /movie/upcoming?language=en-US&page=1
export const fetchUpcomingMovies = async () => {
    if (IS_OFFLINE) return StubUpcomingMovies.results
    try {
        const response = await axios.get(`${BASE_URL}/movie/upcoming?language=en&page=1`, {
            headers
        })
        return response.data.results
    } catch (e) {
        const errorMessage = "Error to fetch upcoming movies. " + e
        console.error(errorMessage)
        return new Error(errorMessage)
    }
}

// Top rated url: /movie/top_rated?language=en-US&page=1
export const fetchTopRatedMovies = async () => {
    if (IS_OFFLINE) return StubTopRatedMovies.results
    try {
        const response = await axios.get(`${BASE_URL}/movie/top_rated?language=en-US&page=1`, {
            headers
        })
        return response.data.results
    } catch (e) {
        const errorMessage = "Error to fetch top rated movies. " + e
        console.error(errorMessage)
        return new Error(errorMessage)
    }
}

// Movie details url: https://api.themoviedb.org/3/movie/{movie_id}
export const fetchMovieDetails = async (movieId) => {
    if (IS_OFFLINE) return StubMovieDetails
    try {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}?language=en-US`, { headers })
        return response.data
    } catch (e) {
        const errorMessage = "Error to fetch movies details. " + e
        console.error(errorMessage)
        return new Error(errorMessage)
    }
}

// Movie credits url: https://api.themoviedb.org/3/movie/{movie_id}/credits
export const fetchMovieCast = async (movieId) => {
    if (IS_OFFLINE) return StubMovieCast.cast
    try {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits?language=en-US`, {
            headers
        })
        return response.data.cast
    } catch (e) {
        const errorMessage = "Error to fetch movies credits. " + e
        console.error(errorMessage)
        return new Error(errorMessage)
    }
}

// Similar movies url: https://api.themoviedb.org/3/movie/{movie_id}/similar
export const fetchSimilarMovies = async (movieId) => {
    if (IS_OFFLINE) return StubSimilarMovies.results
    try {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}/similar?language=en-US`, {
            headers
        })
        return response.data.results
    } catch (e) {
        const errorMessage = "Error to fetch similar movies. " + e
        console.error(errorMessage)
        return new Error(errorMessage)
    }
}

// Person details url: https://api.themoviedb.org/3/person/{person_id}
export const fetchPersonDetails = async (personId) => {
    if (IS_OFFLINE) return StubPersonDetails
    try {
        const response = await axios.get(`${BASE_URL}/person/${personId}?language=en-US`, {
            headers
        })
        return response.data
    } catch (e) {
        const errorMessage = "Error to fetch person details. " + e
        console.error(errorMessage)
        return new Error(errorMessage)
    }
}

// Person movie credits url: https://api.themoviedb.org/3/person/{person_id}/movie_credits
export const fetchPersonMovies = async (personId) => {
    if (IS_OFFLINE) return StubPersonMovies.cast
    try {
        const response = await axios.get(
            `${BASE_URL}/person/${personId}/movie_credits?language=en-US`,
            {
                headers
            }
        )
        return response.data.cast
    } catch (e) {
        const errorMessage = "Error to fetch person movie credits. " + e
        console.error(errorMessage)
        return new Error(errorMessage)
    }
}

// Search Movie url: https://api.themoviedb.org/3/search/movie?query=fast&language=en-US&page=1
export const fetchSearchResults = async (query) => {
    if (IS_OFFLINE) return StubSearchMovie.results
    try {
        const response = await axios.get(
            `${BASE_URL}/search/movie?query=${query}&language=en-US&page=1`,
            { headers }
        )
        return response.data.results
    } catch (e) {
        const errorMessage = "Error to fetch search movie. " + e
        console.error(errorMessage)
        return new Error(errorMessage)
    }
}

// Search keyword url: https://api.themoviedb.org/3/search/keyword?query=fast&page=1
export const fetchSearchKeywords = async (query) => {
    if (IS_OFFLINE) return StubSearchKeyword.results
    try {
        const response = await axios.get(`${BASE_URL}/search/keyword?query=${query}&page=1`, {
            headers
        })
        return response.data.results
    } catch (e) {
        const errorMessage = "Error to fetch search keyword. " + e
        console.error(errorMessage)
        return new Error(errorMessage)
    }
}
