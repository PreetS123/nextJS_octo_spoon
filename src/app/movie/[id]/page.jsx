import Image from "next/image";
import React from "react";

const MoviePage = async ({ params }) => {
  const movieId = params.id;
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log("movie page", data);
  const {
    name,
    title,
    release_date,
    first_air_date,
    vote_count,
    backdrop_path,
    poster_path,
    overview,
  } = data;
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original${
            backdrop_path || poster_path
          }`}
          alt={name || "Movie image"}
          width={500}
          height={300}
          style={{maxWidth:'100%', maxHeight:'100%'}}
          className="sm:rounded-t-lg hover:opacity-75 transition-opacity duration-300 m-auto"
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">{title || name}</h2>
          <p className="text-lg mb-3">{overview}</p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released: </span>{" "}
            {release_date || first_air_date}
          </p>
          <p>
          <span className="font-semibold mr-1">Rating: </span>{" "}
          {vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
