"use client";

import Image from "next/image";
import addCart from "@/../../public/assets/img/add-cart.svg";
import { movieStore } from "@/store/movieStore";
import { IMovie } from "@/interface/imovie";

export default function ButtonAddCart({ movie }: { movie: IMovie }) {
  const addMovie = movieStore((state) => state.addMovie);

  const movieQuantity = movieStore((state) => {
    const foundMovie = state.movies.find((m) => m.id === movie.id);
    return foundMovie ? foundMovie.quantity : 0;
  });

  return (
    <>
      <div
        className={`
            mt-2 text-small text-white py-3 rounded-[0.25rem] w-auto m-auto flex items-center justify-center cursor-pointer select-none
            ${movieQuantity ?? 0 > 0 ? "bg-primary-green hover:bg-primary-green-dark active:bg-primary-green-dark" : "bg-primary-blue hover:bg-primary-blue-dark active:bg-primary-blue-dark"}
          `}
        onClick={() => addMovie(movie)}
      >
        <Image src={addCart} alt="ADICIONAR AO CARRINHO" className="me-1" />
        <span>{movieQuantity}</span>
        <b className="ms-3">ADICIONAR AO CARRINHO</b>
      </div>
    </>
  );
}
