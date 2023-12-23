import axios from "axios"

import { THEMOVIEDB_API_KEY } from "./secret"

const trendingMoviesEndpoint = "/trending/movie/day?language=en-US"

const upcomingMoviesEndpoint = "/movie/upcoming?language=en-US&page=1"

const topRatedMoviesEndpoint = "/movie/top_rated?language=en-US&page=1"

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    timeout: 1000,
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${THEMOVIEDB_API_KEY}`
    }
})

const BASE_URL = "https://api.themoviedb.org/3"

const headers = {
    accept: "application/json",
    Authorization: `Bearer ${THEMOVIEDB_API_KEY}`
}

// export const fetchTrendingMovies = async () => {
//     try {
//         const resp = await instance.get(trendingMoviesEndpoint)
//         return resp.data
//     } catch (e) {
//         console.log("Error: ", e)
//         return new Error("Error to fetch trending movies. " + e)
//     }
// }

export const fetchTrendingMovies = async () => {
    try {
        const response = await axios({
            url: "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${THEMOVIEDB_API_KEY}`
            }
        })
        console.log("DATA: ", response.data)
        return response.data
    } catch (e) {
        const errorMessage = "Error to fetch trending movies. " + e
        console.error(errorMessage)
        return new Error(errorMessage)
    }
}

export const fetchUpcomingMovies = async () => {
    try {
        const resp = await instance.get(upcomingMoviesEndpoint)
        return resp.data
    } catch (e) {
        console.log("Error: ", e)
        return new Error("Error to fetch upcoming movies. " + e)
    }
}

export const fetchTopRatedMovies = async () => {
    try {
        const resp = await instance.get(topRatedMoviesEndpoint)
        return resp.data
    } catch (e) {
        console.log("Error: ", e)
        return new Error("Error to fetch top rated movies. " + e)
    }
}
