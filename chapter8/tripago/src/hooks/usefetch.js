import { useState, useEffect, useRef } from "react"
export const useFetch = (url, _options) =>{
    const [data, setData] = useState(null)
    const[isPending, setIsPending] = useState(false)
    const[error, setError] = useState(null)

    const options = useRef(_options).current

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
    }, [url,, options])

    return {data, isPending, error}
}