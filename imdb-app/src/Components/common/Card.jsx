import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

const Card = ({ singleCardEle }) => {
  const {
    id,
    name,
    title,
    release_date,
    first_air_date,
    vote_count,
    backdrop_path,
    poster_path,
    overview,
  } = singleCardEle;
  let short_name = name?.slice(0, 8);
  console.log("khjhsjk", singleCardEle);
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border-slate-400 sm:m-2 transition-shadow duration-200 p-2">
      <Link href={`/movie/${singleCardEle.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original${
            backdrop_path || poster_path
          }`}
          alt={short_name || "Movie image"}
          width={250}
          height={150}
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300 m-auto"
        />
        <div>
          <p className="line-clamp-2 text-md">{overview}...</p>
          <h2 className="text-lg font-bold truncate">{title || name}</h2>
          <p className="flex gap-3 items-center">
            {release_date || first_air_date} <FiThumbsUp className="h-5 m-1" />{" "}
            {vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
