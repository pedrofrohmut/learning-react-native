import { useState, useEffect } from "react"
import axios from "axios"

import ENV from "../env.js"

const optionsBuilder = (endpoint, query) => ({
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: query,
    headers: {
        "X-RapidAPI-Key": ENV.RAPID_API_KEY,
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com"
    }
})

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const options = optionsBuilder(endpoint, query)
            const response = await axios.request(options)
            setData(response.data.data)
        } catch (err) {
            setError(err)
            // alert("There is an error")
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => { fetchData() }, [])

    const refetch = () => fetchData()

    return {
        data,
        isLoading,
        error,
        refetch
    }
}

export default useFetch
