import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../Axios/Axios'
import requests from '../Request/Reaquest'

function Banner() {
    const [movie, setMovies] = useState([]);

    useEffect(()=> {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovies(
                request?.data.results[
                Math.floor(Math.random() * request.data.results.length)
                ]
            )
        }
    fetchData();
    },[])

    console.log(movie)
  return (
    <header
    className="banner"
    style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
    }}>
    <div className="banner__contents">
        <h1 className="banner__title">
            {movie?.title || movie?.name || movie.original_name}
        </h1>
        <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
            {(movie?.overview)}
        </h1>
    </div>
    <div className="banner__fadeBottom" />
</header>
  )
}

export default Banner