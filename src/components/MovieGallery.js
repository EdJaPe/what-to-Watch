import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';


const MovieGallery =(props) => {
    const [currentMovie, setCurrentMovie] = useState([])
    const [previousMovies, setPreviousMovies] = useState([])

    useEffect(() => {
        let tempArray = []
        tempArray = tempArray.push(props.movieInfo)
        setCurrentMovie([props.movieInfo])
        setPreviousMovies(tempArray)
        
    },[props.movieInfo]);


    const listOfMovieCards = previousMovies.map((movie, i) => {
        return <MovieCard {...movie} key={i} />
    })

    // const singleMovieCard = <MovieCard {...currentMovie} />

    // create function that renders the movie cards depending on the boolean
    // let renderMovie = () => (props.recentGallery === true) ? listOfMovieCards : singleMovieCard
    
    return (
        <div>
            <h1>{props.title}</h1>
            {/* {singleMovieCard} */}
        </div>
    );
}

export default MovieGallery