import React from 'react'
import Banner from './components/banner/Banner'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PopularMovieSlide from './components/popularMovieSlide/popularMovieSlide';

const Homepage = () => {
  return (
    <div>
      <Banner/>
      <PopularMovieSlide/>
    </div>
  )
}

export default Homepage
