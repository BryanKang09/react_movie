import React from 'react'
import { usePopularMoivesQuery } from '../../../../hooks/usePopularMovies';

const popularMovieSlide = () => {
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
                swipeable={true}
                draggable={true}
                showDots={true}
                
                centerMpde={true}
                // ssr={true} // means to render carousel on server-side.
                infinite={true}
                // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                // autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"

                itemClass="movie-slider p-1"
                containerClass="carousel-container"
                responsive={responsive}
                >
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>           7:00
            </Carousel>;
        </div>
    )
}

export default popularMovieSlide;
