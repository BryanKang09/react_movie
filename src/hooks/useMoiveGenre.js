import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMoiveGenre = ()=>{
    return api.get(`/genre/movie/list`)
}

export const useMovieGenreQuery  = ()=> {
    return useQuery({
        queryKey: ['movie-genre'],
        queryFn: fetchMoiveGenre,
        select: (result) =>result.data.genres,
        staleTime: 30000,
        
    })
}