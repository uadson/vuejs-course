// Custom hook
import { useState, useEffect } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url)
            const resJson = await response.json()

            setData(resJson)
        }

        fetchData()
    }, [url])

    return { data }
}
