import cart from "@/../../public/assets/img/cart.svg";

import Image from "next/image";
import Link from "next/link";
import QuantityCart from "./quantityCart";

export default function Header() {
  return (
    <div className="w-full h-20 bg-primary-purple text-white">
      <div className="container max-w-[1080px] mx-auto px-4 flex items-center justify-between h-full">
        <Link href="/">
          <h4 className="text-h4"><b>WeMovies</b></h4>
        </Link>
        <div className="flex items-center">
          <div className="text-right">
            <p className="leading-none hidden md:block text-h6 font-semibold">Meu Carrinho</p>
            <p className="text-primary-gray leading-none text-small font-semibold"><QuantityCart /></p>
          </div>
          <Link href="/carrinho">
            <Image src={cart} alt="Carrinho" quality={100} unoptimized className="ms-2 block h-auto max-w-full"></Image>
          </Link>
        </div>
      </div>
    </div>
  );
}
