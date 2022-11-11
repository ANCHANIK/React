import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    // useParams() 로 해당 data의 ID 값을 가져와 API 호출에 사용
    const getMovie = async () => {
        const json = await (
            await fetch(
                `http://192.168.1.128:35500/src/movie.json?movie_id=${id}`
                // `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        console.log(json)
    }
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <>
            <h1>Details</h1>
        </>
    )
}

export default Detail;