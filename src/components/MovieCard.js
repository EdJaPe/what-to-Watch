import React from 'react';

const MovieCard =(props) => {
    return (
        <div>
            <img src={props.movieInfo.Poster} alt="poster"/>
            <h1>{props.movieInfo.Title}</h1>
            <p>{props.movieInfo.Plot}</p>
            <div>
                <div>
                    <p>Date released:{props.movieInfo.Released}</p>
                    <p>Rating:{props.movieInfo.imdbRating}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieCard