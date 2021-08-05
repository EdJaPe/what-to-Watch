import React from 'react';
import MovieCard from './MovieCard';


const MovieGallery =(props) => {
    
    return (
        <div>
            <MovieCard movieInfo={props.movieInfo}/>
        </div>
    );
}

export default MovieGallery