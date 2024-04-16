import { useSearchParams } from "react-router-dom";
import { Card } from "../components";
import useFetch from "../hooks/useFetch";
import { Movie } from "../types/Movie";

const Search = () => {
  const [searchParams] = useSearchParams();
  const queryTerm: string | null = searchParams.get("q");
  const { data } = useFetch({ apiPath: "search/movie", query: queryTerm });
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <p className="text-3xl text-gray-700 dark:text-white">
          {data.length === 0
            ? `No results for ${queryTerm}`
            : `
            Results for "${queryTerm}"
        `}
        </p>
      </section>
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

export default Search;
