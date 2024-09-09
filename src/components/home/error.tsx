import notFound from "@/../../public/assets/img/not-found.svg";

import Image from "next/image";

export default function Error() {

  return (
    <div className="container max-w-[1080px] mx-auto px-4 h-full">
      <div className="bg-white rounded-[0.25rem] w-full text-center flex items-center justify-center px-4 py-16 md:py-0 md:min-h-[80vh]">
        <div>
          <h4 className="text-h4 px-4 text-primary-purple"><b>Parece que não há nada por aqui :(</b></h4>
          <Image src={notFound} alt="Compra realizada com sucesso!" quality={100} unoptimized className="m-auto block h-auto max-w-full mt-6"></Image>
          <a href="#" className="mt-6 bg-primary-blue hover:bg-primary-blue-dark active:bg-primary-blue-dark text-small text-white py-3 block rounded-[0.25rem] max-w-44 m-auto"><b>Recarregar página</b></a>
        </div>
      </div>
    </div>
  )
}
