import React from 'react'
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import './MovieCard.style.css';
import { useMovieGenreQuery } from '../../hooks/useMoiveGenre';


const MovieCard = ({movie}) => {

  const {data: genreData}=useMovieGenreQuery() /* : rename*/

  const showGenre = (genreIdList)=>{
    if (!genreData) return []
    const genreNameList= genreIdList.map((id)=>{
      const genreObj =  genreData.find((genre)=>genre.id === id)
      return genreObj.name;
    })

    return genreNameList
  }
  

  return (
    <>
    <div style = {{backgroundImage: "url("+`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`+")"}} 
    className="movie-card"> 
      
      
      <div className='overlay'>
        <div>
          <h1>{movie.title}</h1>
          {showGenre(movie.genre_ids).map((id)=> <Badge bg="danger">{id}</Badge>)} {/* go thru fun showGenre before map //*/}
        </div>

        <div>Vote: {movie.vote_average}</div>
        <div>Popularity: {movie.popularity}</div>
        <div>Age: {movie.adult?'over 18':'All'}</div>
      </div>
    </div>  
    </>
  )
}

export default MovieCard;
