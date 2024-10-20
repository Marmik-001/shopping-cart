import {useState,useEffect } from 'react'




export default function useFetch(url:string  , _options = {}){

    const [data, setdata] = useState<any>(null)
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState<any>(null)

    async function fetchRecipe(url:string){

        setloading(true)
        const ApiResponse = await fetch(url)
        if(!ApiResponse.ok){
            setloading(false)
            seterror(ApiResponse.statusText)
        }
        else{
            const data = await ApiResponse.json()
            setdata(data)
            setloading(false)
            seterror(null)
        }
        
    
    }
    // if(url){
    //     fetchRecipe(url)
    //     console.log(error)
    // }

    useEffect(() => {
      fetchRecipe(url)
    }, [url])
    

    return [data , loading , error]
    

}

