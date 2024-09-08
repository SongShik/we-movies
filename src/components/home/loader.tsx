import loader from "@/../../public/assets/img/loader.png";
import Image from "next/image";

export default function Loader() {

  return (
    <Image src={loader} alt="Carregando..." quality={100} unoptimized className="block h-auto max-w-full md:mt-10 m-auto animate-spin-slow"></Image>
  )
}
