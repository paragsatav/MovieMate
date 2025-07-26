import React, { use, useEffect, useState } from "react";
import _ from "lodash"

import "./movielist.css"
import MovieCard from "./moviecard";
import FilterGroup from "./filtergroup";

const Movielist = ({type, title, emoji}) => {
    const [movies, setMovies] = useState([]);
    const [filterMovies, setFilterMovies] = useState([]);
    const [minRate, setMinRate] = useState(0);
    const [sort, setSort] = useState({
        by : "default",
        order : "asc"
    })
    useEffect(() => {
        fechmovies();
    }, []);

    useEffect(() => {
        if(sort.by !== "default"){
           const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order]);
           setFilterMovies(sortedMovies);
        }
    },[sort])
    const fechmovies = async() => {

        const res = await fetch(
            `https://api.themoviedb.org/3/movie/${type}?api_key=d80044095c1ed0cc8700da4083e5b35b`
        );
        const data = await res.json();
        setMovies(data.results);
        setFilterMovies(data.results);
    }

    const handlefiltered = (rate) => {
       if(rate === minRate){
        setMinRate(0);
        setFilterMovies(movies);
       }else {
        setMinRate(rate);

        const filtered = movies.filter((movie) => movie.vote_average >= rate);
        setFilterMovies(filtered);
       }
       
    }

    const handlesort = (e) => {
        const {name, value} = e.target;
        setSort(prev => ({...prev, [name]: value}))
    }
    return(
        <section className="movieList" id={type}>
            <header className="align-center movieHeader">
                <h2 className="movieHeading">{title} <img className="navIcon" src={emoji} alt=""></img></h2>

                <div className=" align-center movieListFilterSort">
                    <FilterGroup minRate ={minRate} 
                     onRatingClick ={handlefiltered}
                     ratings = {[8, 7, 6]}/>
                    
                    <select name="by" id="" onChange={handlesort}
                       value={sort.by} className="align-center movieSort">
                        <option value="default">SortBy</option>
                        <option value="release_date">Date</option>
                        <option value="vote_average">Rating</option>
                    </select>

                    <select name="order" id="" onChange={handlesort}
                        value={sort.order} className="movieSort">
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
            </header>
            <div className="movie_cards">
               {filterMovies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </section>
    );
}

export default Movielist;