export const COLORS = {
    primary: "#eab308"
}

export const MOVIE_NAME = "Ant-man and the Wasp: Quantumania"

export const STUB_MOVIE_ID = "848326"

export const STUB_PERSON_ID = "568657"

export const STUB_TV_SHOW_ID = "121544"

export const STORAGE = {
    // TimeCheck
    lastUpdate: "MOVIEAPP_LAST_UPDATE",
    // HomeScreen
    trendingMovies: "MOVIEAPP_TRENDING_MOVIES",
    upcomingMovies: "MOVIEAPP_UPCOMING_MOVIES",
    topRatedMovies: "MOVIEAPP_TOP_RATED_MOVIES",
    popularMovies: "MOVIEAPP_POPULAR_MOVIES"
}

// Variable to set Online or Offiline state for the API calls
// 1. Offline is good for ajusting the UI without making thousands of requests
// 2. Online to test the funcionality of App
export const IS_OFFLINE = false

export const BASE_URL = "https://api.themoviedb.org/3"

// In Milliseconds
export const SECOND = 1000
export const MIN = SECOND * 60
export const HOUR = MIN * 60

export const CACHE_EXPIRATION = 1 * HOUR
// export const CACHE_EXPIRATION = 30 * SECOND // Fake for testing
