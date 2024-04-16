import { Link } from "react-router-dom"

import { type Movie } from "../types/Movie";
import Backup from "../assets/backup.jpg"


const Card = (movie:Movie) => {
    const { original_title, overview, poster_path, id } = movie;
    const img = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : Backup;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <Link to={`/movie/${id}`}>
      <img
        className="rounded-t-lg w-full min-h-[565px]"
        src={img}
        alt={movie.title}
      />
    </Link>
    <div className="p-5">
      <Link to={`/movie/${movie.id}`}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {original_title}
        </h5>
      </Link>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {overview?.slice(0, 100) + "..."}
      </p>
     
    </div>
  </div>
  )
}

export default Card