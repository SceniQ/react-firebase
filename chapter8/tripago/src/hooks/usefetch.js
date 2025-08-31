import { useState, useEffect } from "react"
export const useFetch = (url) =>{
    const [data, setData] = useState(null)
    const[isPending, setIsPending] = useState(false)
    const[error, setError] = useState(null)

    useEffect(() =>{
        const controller = new AbortController()
        const fetchData = async () => {
            setIsPending(true)
            try{
                const respone = await fetch(url, {signal: controller.signal})
                if(!respone.ok){
                    throw new Error(respone.statusText);                    
                }
                const json = await respone.json()
                setIsPending(false)
                setData(json)
                setError(null)
            }catch(err){
                if(err.name === "AbortError"){
                    console.log('The fecth was aborted')
                }else{
                    setIsPending(false)
                    setError("Issue occurred while attempting to fecth data...")
                    console.log(err.message)
                }
                
            }
        }
        fetchData()
        return () =>{
            controller.abort()
        }
    }, [url])

    return {data, isPending, error}
}