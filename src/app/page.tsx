import ListMovies from "@/components/home/listMovies";
import Loader from "@/components/home/loader";
import { Suspense } from "react";

export default async function Home() {

  return (
    <Suspense fallback={<Loader />}>
      <ListMovies />
    </Suspense>
  );
}
