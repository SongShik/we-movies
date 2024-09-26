import Movie from "./movie";
import Error from "./error";
import { IMovie } from "@/interface/imovie";
import viuva from "@/../../public/assets/img/movies/viuva-negra.webp";
import shang from "@/../../public/assets/img/movies/shang-chi.webp";
import spider from "@/../../public/assets/img/movies/spider-man.webp";
import morbius from "@/../../public/assets/img/movies/morbius-1.webp";
import batman from "@/../../public/assets/img/movies/the-batman.webp";
import eternals from "@/../../public/assets/img/movies/eternals.webp";

// async function getMovies(): Promise<Array<IMovie> | null> {
//   try {
//     const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/movies');
//     if (!res.ok) { return null; }
//     const data = await res.json();
//     return data.products || null;
//   } catch (error) {
//     console.error('Erro ao buscar filmes:', error);
//     return null;
//   }
// }

export default async function ListMovies() {
  // const moviesData = await getMovies()
  
  const moviesData = [
    {
      id: 1,
      title: 'Viúva Negra',
      price: 9.99,
      image: viuva
    },
    {
      id: 2,
      title: 'Shang-chi',
      price: 30.99,
      image: shang
    },
    {
      id: 3,
      title: 'Homem Aranha',
      price: 29.9,
      image: spider
    },
    {
      id: 4,
      title: 'Morbius',
      price: 1.5,
      image: morbius
    },
    {
      id: 5,
      title: 'Batman',
      price: 21.9,
      image: batman
    },
    {
      id: 6,
      title: 'Eternos',
      price: 17.9,
      image: eternals
    },
  ]

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
