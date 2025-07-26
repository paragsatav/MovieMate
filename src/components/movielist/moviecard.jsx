import React from "react";
import "./moviecard.css";
import star from "../../assets/star.png"
import poster from "../../assets/poster.jpg"

const MovieCard =({movie}) => {
    return(
        <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank" className="movieCard">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className="moviePoster"/>
            <div className="movieDetails">
                <h2 className="movieDetailsHeading">{movie.original_title}</h2>
                <div className="movieRate">
                    <p>{movie.release_date}</p>
                    <p>{movie.vote_average} <img src={star} alt="" className="movieEmoji"/></p>
                </div>
                <p className="movieDescription">
                    {movie.overview.slice(0, 100) + "..."}
                </p>
            </div>
        </a>
    );
}

export default MovieCard;