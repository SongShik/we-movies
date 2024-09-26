import { StaticImageData } from "next/image";

export interface IMovie {
  id: number;
  title: string;
  price: number;
  image: string | StaticImageData;
  quantity?: number;
}
