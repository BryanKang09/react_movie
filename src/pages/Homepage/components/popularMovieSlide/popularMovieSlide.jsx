import React from 'react'
import { usePopularMoivesQuery } from '../../../../hooks/usePopularMovies';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from '../MovieCard/MovieCard';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
      slidesToSlide: 8 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const PopularMovieSlide = () => {
    const {data, isLoading, isError, error } = usePopularMoivesQuery();

    if (isLoading){
        return <h1>loading</h1>
    }
    if (isError){
        return <Alert varient = "danger">{error.message}</Alert>
    }
        
    return (
        <div>
            <h3>Popular Movies</h3>
            <Carousel               
                centerMode={true}
                infinite={true}                
                itemClass="movie-slider p-1"
                containerClass="carousel-container"
                responsive={responsive}
                >
                
                {data.results.map((movie,index) => (
                    <MovieCard movie={movie} key={index}/>
                    ))}

            </Carousel>;
        </div>
    )
}

export default PopularMovieSlide;
