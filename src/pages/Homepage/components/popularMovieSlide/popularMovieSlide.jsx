import React from 'react'
import { usePopularMoivesQuery } from '../../../../hooks/usePopularMovies';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';


import './PopularMovieSlide.style.css'
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import {responsive} from '../../../../constants/responsive'


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
            <MovieSlider 
            title='Popular Movies' 
            movies={data.results} 
            responsive={responsive}/>
        </div>
    )
}

export default PopularMovieSlide;
