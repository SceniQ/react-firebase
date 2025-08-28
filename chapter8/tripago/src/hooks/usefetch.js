import { useState, useEffect } from "react"
export const useFetch = (url) =>{
    const [data, setData] = useState(null)
    useEffect(() =>{
        const fetchData = async () => {
            const respone = await fetch(url)
            const json = await respone.json()
            setData(json)
        }
        fetchData()
    }, [url])

    return {data}
}