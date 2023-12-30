import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"

import { THEMOVIEDB_ACCESS_TOKEN } from "./secret"
import { STORAGE, CACHE_EXPIRATION, BASE_URL, IS_OFFLINE } from "../shared/constants"

import StubTrendingMovies from "../stub-data/trending-movies"
import StubUpcomingMovies from "../stub-data/upcoming-movies"
import StubTopRatedMovies from "../stub-data/top-rated-movies"
import StubPopularMovies from "../stub-data/popular-movies"

import StubMovieDetails from "../stub-data/movie-details"
import StubMovieCast from "../stub-data/movie-cast"
import StubSimilarMovies from "../stub-data/similar-movies"

import StubPersonDetails from "../stub-data/person-details"
import StubPersonMovies from "../stub-data/person-movies"

import StubSearchMovie from "../stub-data/search-movie"
import StubSearchKeyword from "../stub-data/search-keyword"
import StubSearchMulti from "../stub-data/search-multi"

import StubTvShowDetails from "../stub-data/tv-details"
import StubTvShowCast from "../stub-data/tv-cast"
import StubSimilarTvShows from "../stub-data/tv-similar"

const headers = {
    accept: "application/json",
    Authorization: `Bearer ${THEMOVIEDB_ACCESS_TOKEN}`
}

export const fallbackMoviePoster =
    "https://img.myloview.com/stickers/white-laptop-screen-with-hd-video-technology-icon-isolated-on-grey-background-abstract-circle-random-dots-vector-illustration-400-176057922.jpg"

export const fallbackPersonProfile =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUiF-YGjavA63_Au8jQj7zxnFxS_Ay9xc6pxleMqCxH92SzeNSjBTwZ0l61E4B3KTS7o&usqp=CAU"

export const imageUriOriginal = (path) => (path ? "https://image.tmdb.org/t/p/original" + path : "")

export const imageUri500 = (path) => (path ? "https://image.tmdb.org/t/p/w500" + path : "")

export const imageUri342 = (path) => (path ? "https://image.tmdb.org/t/p/w342" + path : "")

export const imageUri185 = (path) => (path ? "https://image.tmdb.org/t/p/w185" + path : "")

// id table at: https://developer.themoviedb.org/reference/person-details
export const getStringFromGenderId = (genderId) => {
    switch (parseInt(genderId)) {
        case 0:
            return "N/A"
        case 1:
            return "Female"
        case 2:
            return "Male"
        case 3:
            return "Non-binary"
    }
}

const getCacheIfNotExpired = async (key, expiration) => {
    const unparsedData = await AsyncStorage.getItem(key)
    if (!unparsedData) return null

    const cacheLastUpdate = await AsyncStorage.getItem(STORAGE.lastUpdate)
    if (!cacheLastUpdate) return null

    const now = new Date().getTime()
    const isExpired = now - parseInt(cacheLastUpdate) > expiration
    if (isExpired) return null

    const cache = JSON.parse(unparsedData)
    return cache
}

const updateCacheExpirationToNow = async () => {
    AsyncStorage.setItem(STORAGE.lastUpdate, new Date().getTime().toString())
}

const setItemToStorage = async (key, data) => {
    if (!data) return
    AsyncStorage.setItem(key, JSON.stringify(data))
}

// Trending movies url: /trending/movie/day?language=en-US
export const fetchTrendingMovies = async () => {
    // Offline stub
    if (IS_OFFLINE) return StubTrendingMovies.results.slice(0, 11)

    // Cache check
    const cache = await getCacheIfNotExpired(STORAGE.trendingMovies, CACHE_EXPIRATION)
    if (cache !== null) {
        console.log("TrendingMovies - Returning from cache")
        return cache.results.slice(0, 11)
    }

    // Fetch if is online and has no valid cache
    try {
        const response = await axios.get(`${BASE_URL}/trending/movie/day?language=en-US`, {
            headers
        })

        await setItemToStorage(STORAGE.trendingMovies, response.data)
        await updateCacheExpirationToNow()
        console.log("TrendingMovies - Returning from fetch")

        return response.data.results.slice(0, 11)
    } catch (e) {
        const errorMessage = "Error to fetch trending movies. " + e
        console.error(errorMessage)
        return new Error(errorMessage)
    }
}

// Upcoming movies url: /movie/upcoming?language=en-US&page=1
export const fetchUpcomingMovies = async () => {
    // Offiline stub
    if (IS_OFFLINE) return StubUpcomingMovies.results.slice(0, 11)

    // Check cache
    const cache = await getCacheIfNotExpired(STORAGE.upcomingMovies, CACHE_EXPIRATION)
    if (cache !== null) {
        console.log("UpcomingMovies - Returning from cache")
        return cache.results.slice(0, 11)
    }

    // Fetch from API If is not offline and there is no cache
    try {
        const response = await axios.get(`${BASE_URL}/movie/upcoming?language=en&page=1`, {
            headers
        })

        await setItemToStorage(STORAGE.upcomingMovies, response.data)
        await updateCacheExpirationToNow()
        console.log("UpcomingMovies - Returning from fetch")

        return response.data.results.slice(0, 11)
    } catch (e) {
        const errorMessage = "Error to fetch upcoming movies. " + e
        console.error(errorMessage)
        return new Error(errorMessage)
    }
}

// Top rated url: /movie/top_rated?language=en-US&page=1
export const fetchTopRatedMovies = async () => {
    if (IS_OFFLINE) return StubTopRatedMovies.results.slice(0, 11)

    const cache = await getCacheIfNotExpired(STORAGE.topRatedMovies, CACHE_EXPIRATION)
    if (cache !== null) {
        console.log("TopRatedMovies - Returning from cache")
        return cache.results.slice(0, 11)
    }

    try {
        const response = await axios.get(`${BASE_URL}/movie/top_rated?language=en-US&page=1`, {
            headers
        })

        await setItemToStorage(STORAGE.topRatedMovies, response.data)
        await updateCacheExpirationToNow()
        console.log("TopRatedMovies - Returning from fetch")

        return response.data.results.slice(0, 11)
    } catch (e) {
        const errorMessage = "Error to fetch top rated movies. " + e
        console.error(errorMessage)
        return new Error(errorMessage)
    }
}

// Popular movies url: https://api.themoviedb.org/3/movie/popular?language=en-US&page=1
export const fetchPopularMovies = async () => {
    if (IS_OFFLINE) return StubPopularMovies.results.slice(0, 11)

    const cache = await getCacheIfNotExpired(STORAGE.popularMovies, CACHE_EXPIRATION)
    if (cache !== null) {
        console.log("PopularMovies - Returning from cache")
        return cache.results.slice(0, 11)
    }

    try {
        const response = await axios.get(`${BASE_URL}/movie/popular?language=en-US&page=1`, {
            headers
        })

        await setItemToStorage(STORAGE.popularMovies, response.data)
        await updateCacheExpirationToNow()
        console.log("PopularMovies - Returning from fetch")

        return response.data.results.slice(0, 11)
    } catch (e) {
        const errorMessage = "Error to fetch popular movies. " + e
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
    if (IS_OFFLINE) return StubMovieCast.cast.slice(0, 6)
    try {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits?language=en-US`, {
            headers
        })
        return response.data.cast.slice(0, 6)
    } catch (e) {
        const errorMessage = "Error to fetch movies credits. " + e
        console.error(errorMessage)
        return new Error(errorMessage)
    }
}

// Similar movies url: https://api.themoviedb.org/3/movie/{movie_id}/similar
export const fetchSimilarMovies = async (movieId) => {
    if (IS_OFFLINE) return StubSimilarMovies.results.slice(0, 11)
    try {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}/similar?language=en-US`, {
            headers
        })
        return response.data.results.slice(0, 11)
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
    if (IS_OFFLINE) return StubPersonMovies.cast.slice(0, 11)
    try {
        const response = await axios.get(
            `${BASE_URL}/person/${personId}/movie_credits?language=en-US`,
            {
                headers
            }
        )
        return response.data.cast.slice(0, 11)
    } catch (e) {
        const errorMessage = "Error to fetch person movie credits. " + e
        console.error(errorMessage)
        return new Error(errorMessage)
    }
}

// Search Movie url: https://api.themoviedb.org/3/search/movie?query=fast&language=en-US&page=1
export const fetchSearchMovies = async (query) => {
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
    if (IS_OFFLINE) return StubSearchKeyword.results.slice(0, 11)
    try {
        const response = await axios.get(`${BASE_URL}/search/keyword?query=${query}&page=1`, {
            headers
        })
        return response.data.results.slice(0, 11)
    } catch (e) {
        const errorMessage = "Error to fetch search keyword. " + e
        console.error(errorMessage)
        return new Error(errorMessage)
    }
}

// Search multi url: https://api.themoviedb.org/3/search/multi?query=fast&page=1
export const fetchSearchMulti = async (query) => {
    if (IS_OFFLINE) return StubSearchMulti.results
    try {
        const response = await axios.get(`${BASE_URL}/search/multi?query=${query}&page=1`, {
            headers
        })
        return response.data.results
    } catch (e) {
        const errorMessage = "Error to fetch search multi. " + e
        console.error(errorMessage)
        return new Error(errorMessage)
    }
}

// Tv show details url: https://api.themoviedb.org/3/tv/219070?language=en-US
export const fetchTvShowDetails = async (seriesId) => {
    if (IS_OFFLINE) return StubTvShowDetails
    try {
        const response = await axios.get(`${BASE_URL}/tv/${seriesId}?language=en-US`, { headers })
        return response.data
    } catch (e) {
        const errorMessage = "Error to fetch tv show details. " + e
        console.error(errorMessage)
        return new Error(errorMessage)
    }
}
// Tv show cast url: https://api.themoviedb.org/3/tv/121544/credits?language=en-US
export const fetchTvShowCast = async (seriesId) => {
    if (IS_OFFLINE) return StubTvShowCast.cast.slice(0, 6)
    try {
        const response = await axios.get(`${BASE_URL}/tv/${seriesId}/credits?language=en-US`, {
            headers
        })
        return response.data.cast.slice(0, 6)
    } catch (e) {
        const errorMessage = "Error to fetch tv show cast. " + e
        console.error(errorMessage)
        return new Error(errorMessage)
    }
}

// Tv show similar url: https://api.themoviedb.org/3/tv/series_id/similar?language=en-US&page=1
export const fetchSimilarTvShows = async (seriesId) => {
    if (IS_OFFLINE) return StubSimilarTvShows.results.slice(0, 11)
    try {
        const response = await axios.get(`${BASE_URL}/tv/${seriesId}/similar?language=en-US`, {
            headers
        })
        return response.data.results.slice(0, 11)
    } catch (e) {
        const errorMessage = "Error to fetch tv show cast. " + e
        console.error(errorMessage)
        return new Error(errorMessage)
    }
}
