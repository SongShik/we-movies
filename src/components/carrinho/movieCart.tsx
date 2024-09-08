"use client";

import { IMovie } from "@/interface/imovie";
import formatPrice from "@/utils/formatPrice";
import Image from "next/image";

import trash from "@/../../public/assets/img/trash.svg";
import more from "@/../../public/assets/img/more.svg";
import less from "@/../../public/assets/img/less.svg";
import { movieStore } from "@/store/movieStore";

export default function MovieCart({ movie }: { movie: IMovie }) {
  // Realiza as chamadas das funções da store
  const modifyQuantity = movieStore((state) => state.modifyQuantity);
  const removeMovie = movieStore((state) => state.removeMovie);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Math.max(Number(event.target.value));
    modifyQuantity(movie.id, newQuantity - (movie.quantity ?? 0));
  };

  const handleBlur = () => {
    if (movie.quantity === 0) {
      modifyQuantity(movie.id, 1 - (movie.quantity ?? 0));
    }
  };

  // Calcula o subtotal do filme
  const subtotal = movie.price * (movie.quantity ?? 0);

  return (
    <>
      <div className="hidden md:grid grid-cols-12 gap-4 mb-6 primary-purple">
        <div className="text-primary-purple md:col-span-4 lg:col-span-3 flex items-center">
          <Image src={movie.image} alt={movie.title} width={91} height={114} className="me-4" />
          <div>
            <h6 className="text-h6"><strong>{movie.title}</strong></h6>
            <p><strong>R$ {formatPrice(movie.price)}</strong></p>
          </div>
        </div>
        <div className="md:col-span-4 flex items-center">
          {movie.quantity != 1 ?
            <Image src={less} alt="Diminuir" className="cursor-pointer"
              onClick={() => modifyQuantity(movie.id, -1)}
            />
            :
            <Image src={less} alt="Remover" className="cursor-pointer"
              onClick={() => removeMovie(movie.id)}
            />
          }
          <input
            type="number"
            min={0}
            value={movie.quantity}
            onChange={handleQuantityChange}
            onBlur={handleBlur}
            className="w-16 text-center border border-gray-300 active:border-gray-50 rounded-[0.25rem] text-h6 mx-3"
          />
          <Image src={more} alt="Aumentar" className="cursor-pointer"
            onClick={() => modifyQuantity(movie.id, 1)}
          />
        </div>
        <div className="text-primary-purple md:col-span-4 lg:col-span-5 flex items-center justify-between">
          <p><strong>R$ {formatPrice(subtotal)}</strong></p>
          <Image src={trash} alt="Excluir" className="cursor-pointer"
            onClick={() => removeMovie(movie.id)}
          />
        </div>
      </div>

      <div className="flex md:hidden items-center mt-5">
        <Image src={movie.image} alt={movie.title} width={64} height={82} />
        <div className="flex items-center justify-between flex-col w-full ms-4">
          <div className="flex items-center justify-between w-full">
            <h6 className="text-h6"><strong>{movie.title}</strong></h6>
            <div className="flex items-center">
              <p className="me-4"><strong>R$ {formatPrice(movie.price)}</strong></p>
              <Image src={trash} alt="Excluir" onClick={() => removeMovie(movie.id)} />
            </div>
          </div>
          <div className="flex items-center justify-between w-full mt-3">
            <div className="flex items-center flex-wrap">
              <Image src={less} alt="Diminuir" className="cursor-pointer" onClick={() => modifyQuantity(movie.id, -1)} />
              {/* <input value={movie.quantity} type="number" className="w-16 text-center border border-gray-300 active:border-gray-50 rounded-[0.25rem] text-h6 mx-3" /> */}
              <Image src={more} alt="Aumentar" className="cursor-pointer" onClick={() => modifyQuantity(movie.id, 1)} />
            </div>
            <div className="flex items-center flex-col text-center justify-between">
              <p className="text-primary-gray"><strong><small>SUBTOTAL</small></strong></p>
              <p><strong>R$ {formatPrice(subtotal)}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
