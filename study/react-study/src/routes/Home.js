import React from "react";
import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    
		// async-await 사용
    const getMovies = async() => {
		const json = await (
			await fetch(
				'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
			)
		).json();
		setMovies(json.data.movies);
		setLoading(false);
	}

	useEffect(() => {
		getMovies();
	}, [])
		
    // then 사용했을 때 
	/* 
	useEffect(() => {
		fetch('http://192.168.1.128:35500/src/movie.json')
		.then((response) => response.json())
		.then(json => {
			setMovies(json.data.movies);
			setLoading(false);
		})
	}, [])
	 */

    return (
        <>
            {loading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					{movies.map((movie) => (
						<Movie
							key={movie.id}
							id={movie.id}
							coverImage={movie.medium_cover_image}
							title={movie.title}
							year={movie.year}
							summary={movie.summary}
							genres={movie.genres}
						/>
					))}
				</div>
			)}
        </>
    )
}

export default Home;