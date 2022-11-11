import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


function Movie ({ id, coverImage, title, year, summary, genres }) {
    return (
        <>
            <img src={coverImage} alt={title} />
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{year}</p>
            <p>{summary}</p>
            <ul>
                {genres.map((genre) => (
                    <li key={genre}>{genre}</li>
                ))}
            </ul>
        </>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImage: PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    year:PropTypes.number.isRequired,
    summary:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;