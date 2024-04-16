
import { useEffect } from "react";
import { Card } from "../components";
import useFetch from "../hooks/useFetch";
import { Movie } from "../types/Movie";

type MovieListProps = {
    apiPath:string;
    title:string
}

const MovieList= ({apiPath, title}:MovieListProps) => {
     const { data } = useFetch({apiPath, query:""});
     useEffect(() => {
        document.title = `${title} | Movie App`
     })
    return (
        <main>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-center xl:justify-start flex-wrap gap-10">
                        {data?.map((movie: Movie) => (
                                <Card key={movie.id} {...movie} />
                        ))}
                </div>
            </section>
        </main>
    );
};

export default MovieList;
