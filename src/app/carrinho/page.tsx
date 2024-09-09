"use client";

import MovieCart from "@/components/carrinho/movieCart";
import TotalValue from "@/components/carrinho/totalValue";
import { IMovie } from "@/interface/imovie";
import { movieStore } from "@/store/movieStore";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import Cookie from "js-cookie";

export default function Carrinho() {
  const moviesData = movieStore((state) => state.movies);
  const router = useRouter()

  function finishCart() {
    if(moviesData.length > 0){
      Cookie.set('CartValidate', 'true', { expires: 1 })
      router.push('/compra-realizada')
      movieStore.getState().resetMovies()
    }
  }

  return (
    <div className="container mx-auto px-4 h-full">
      <div className="bg-white rounded-[0.25rem] w-full p-4 md:p-6">
        <div className="hidden md:grid grid-cols-12 gap-4 mb-6">
          <div className="md:col-span-4 lg:col-span-3"><h6 className="text-primary-gray text-h6"><b>PRODUTO</b></h6></div>
          <div className="md:col-span-4"><h6 className="text-primary-gray text-h6"><b>QTD</b></h6></div>
          <div className="md:col-span-4 lg:col-span-5"><h6 className="text-primary-gray text-h6"><b>SUBTOTAL</b></h6></div>
        </div>

        {moviesData.length > 0 ?
          <>
            {moviesData != null && moviesData.map((movie: IMovie) =>
              <div key={movie.id}>
                <MovieCart movie={movie} />
              </div>
            )}
          </>
          :
          <h4 className="text-h4 text-primary-purple"><b>empty</b></h4>
        }

        <hr className="border-t-1 border-primary-gray my-5 md:my-6" />

        <div className="grid grid-cols-12 gap-4 ">
          <div className="col-span-12 md:col-span-6 order-last md:order-first">
            {moviesData.length > 0 ?
              <div onClick={() => finishCart()} className="bg-primary-blue hover:bg-primary-blue-dark active:bg-primary-blue-dark text-small text-white py-3 block rounded-[0.25rem] md:max-w-44 text-center cursor-pointer"><b>FINALIZAR PEDIDO</b></div>
              :
              <Link href="/" className="bg-primary-blue hover:bg-primary-blue-dark active:bg-primary-blue-dark text-small text-white py-3 block rounded-[0.25rem] md:max-w-44 text-center cursor-pointer"><b>VOLTAR</b></Link>
            }
          </div>
          <div className="col-span-12 md:col-span-6 flex items-center justify-between md:justify-end order-first md:order-last">
            <p className="text-primary-gray me-4"><strong>TOTAL</strong></p>
            <h4 className="text-primary-purple text-h3"><strong>R$ <TotalValue/></strong></h4>
          </div>
        </div>
      </div>
    </div>
  )
}
