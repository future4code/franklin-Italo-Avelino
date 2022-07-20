import axios from "axios";
import { useEffect, useState } from "react";

export const useRequestData = (url) => {
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        setIsLoading(true);
        axios.get(url)
        .then((res) => {
            setIsLoading(false)
            setData(res.data)
        })
        .catch((err) => {
            setIsLoading(false)
            setError(err)
        })
    }, [url])

    return [data, isLoading, error]
}