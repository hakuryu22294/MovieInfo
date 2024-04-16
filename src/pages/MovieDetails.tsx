import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { type Movie } from "../types/Movie";
import Backup from "../assets/backup.jpg";
import { Link } from "react-router-dom";

const MovieDetails = ({title}:{title:string}) => {
  const { id } = useParams();
  const [data, setData] = useState<Movie>({} as Movie);
  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const json = await response.json();
      setData(json);
    }
    fetchMovie();
  }, [id])
  useEffect(() =>{
    document.title = `${title}: ${data.title}`
  })
  const img = data.poster_path
    ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    : Backup;
  return (
    <main>
      <section className="flex justify-center gap-16 flex-wrap py-5">
        <div className="max-w-lg">
          <img className="rounded-lg" src={img} alt={data.title} />
        </div>
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white flex flex-col gap-y-6">
          <h1 className="text-4xl text-center font-bold my-3 lg:text-left">
            {data.title}
          </h1>
          <p className="my-4 text-center lg:text-left">{data.overview}</p>
          <p>
            {data.genres?.map((genre) => (
              <span key={genre.id} className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2">
                {genre.name}
              </span>
            ))}
          </p>
          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">
              {data.vote_average}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <a
              href="#"
              className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
            >
              {data.vote_count} reviews
            </a>
          </div>
          <p>
            <span className="mr-2 font-bold">Runtime:</span>
            <span className="font-bold">{data.runtime} mins</span>
          </p>
          <p>
            <span className="mr-2 font-bold">Budget:</span>
            <span className="font-bold">{data.budget}</span>
          </p>
          <p>
            <span className="mr-2 font-bold">Revenue:</span>
            <span className="font-bold">{data.revenue}</span>
          </p>
          <p>
            <span className="mr-2 font-bold">Release Date:</span>
            <span className="font-bold">{data.release_date}</span>
          </p>
          <p>
            <span className="mr-2 font-bold">IMDB Code:</span>
            <span className="font-bold">
                <Link to={`https://www.imdb.com/title/${data.imdb_id}`}>{data.imdb_id}</Link>
            </span>
          </p>
        </div>
      </section>
    </main>
  );
};

export default MovieDetails;
