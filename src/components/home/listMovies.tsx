import Movie from "./movie";
import Error from "./error";
import { IMovie } from "@/interface/imovie";

async function getMovies(): Promise<Array<IMovie> | null> {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/movies');
    if (!res.ok) { return null; }
    const data = await res.json();
    return data.products || null;
  } catch (error) {
    console.error('Erro ao buscar filmes:', error);
    return null;
  }
}

export default async function ListMovies() {
  const moviesData = await getMovies()

  return (
    <>
      {moviesData != null ?
        <div className="container max-w-[1080px] mx-auto px-4 h-full pb-4">
          <div className="grid grid-cols-12 gap-4">
            {moviesData.map((movie: IMovie) =>
              <div key={movie.id} className="col-span-12  md:col-span-6 lg:col-span-4">
                <Movie movie={movie} />
              </div>
            )}
          </div>
        </div>
        :
        <Error />
      }
    </>
  )
}
