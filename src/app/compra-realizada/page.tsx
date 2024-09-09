"use client";

import success from "@/../../public/assets/img/success.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Cookie from "js-cookie";

export default function CompraRealizada() {

  // Remove o cookie CartValidate ao sair da página
  useEffect(() => {
    return () => {
      Cookie.remove('CartValidate')
    };
  }, []);

  return (
    <div className="container mx-auto px-4 h-full">
      <div className="bg-white rounded-[0.25rem] w-full text-center flex items-center justify-center px-4 py-16 md:py-4 md:min-h-[80vh]">
        <div>
          <h4 className="text-h4 px-4 text-primary-purple"><b>Compra realizada com sucesso!</b></h4>
          <Image src={success} alt="Compra realizada com sucesso!" quality={100} unoptimized className="m-auto block h-auto max-w-full mt-6"></Image>
          <Link href="/" className="mt-6 bg-primary-blue hover:bg-primary-blue-dark active:bg-primary-blue-dark text-small text-white py-3 block rounded-[0.25rem] max-w-44 m-auto"><b>VOLTAR</b></Link>
        </div>
      </div>
    </div>
  )
}
