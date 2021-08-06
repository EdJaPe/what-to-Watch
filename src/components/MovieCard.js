import React from 'react';

const MovieCard =(Poster, Title, Plot, Released, imdbRating) => {
    return (
        <div>
            <img src={Poster} alt="poster"/>
            <h1>{Title}</h1>
            <p>{Plot}</p>
            <div>
                <div>
                    <p>Date released:{Released}</p>
                    <p>Rating:{imdbRating}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieCard