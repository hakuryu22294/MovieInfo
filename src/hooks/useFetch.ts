import { useEffect, useState } from "react"
import {type Movie} from '../types/Movie'

export type FetchProps = {
    apiPath:string;
    query:string | null;
}

const useFetch = ({apiPath, query=""}:FetchProps) => {
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${import.meta.env.VITE_API_KEY}&query=${query}`
    const [data,  setData] = useState<Movie[]>([]);
    
    useEffect(() => {
        async function fetchMovies(){
            const response = await fetch(url)
            const json = await response.json();
           setData(json.results);
        }
        fetchMovies();
    },[url]);
    return {data};
}

export default useFetch