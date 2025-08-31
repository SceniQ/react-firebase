import { useState, useEffect } from "react"
export const useFetch = (url) =>{
    const [data, setData] = useState(null)
    const[isPending, setIsPending] = useState(false)
    const[error, setError] = useState(null)

    useEffect(() =>{
        const fetchData = async () => {
            setIsPending(true)
            try{
                const respone = await fetch(url)
                if(!respone.ok){
                    throw new Error(respone.statusText);                    
                }
                const json = await respone.json()
                setIsPending(false)
                setData(json)
                setError(null)
            }catch(err){
                setIsPending(false)
                setError("Issue occurred while attempting to fecth data...")
                console.log(err.message)
            }
        }
        fetchData()
    }, [url])

    return {data, isPending, error}
}