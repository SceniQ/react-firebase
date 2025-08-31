import { useState, useEffect } from "react"
export const useFetch = (url) =>{
    const [data, setData] = useState(null)
    const[isPending, setIsPending] = useState(false)

    useEffect(() =>{
        const fetchData = async () => {
            setIsPending(true)
            const respone = await fetch(url)
            const json = await respone.json()
            setIsPending(false)
            setData(json)
        }
        fetchData()
    }, [url])

    return {data, isPending}
}