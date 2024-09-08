import { IMovie } from '@/interface/imovie';
import formatPrice from '@/utils/formatPrice';
import Image from 'next/image';
import ButtonAddCart from './buttonAddCart';

export default async function Movie({ movie }: { movie: IMovie }) {

  return (
    <div className='bg-white p-4 rounded-[0.25rem] text-center'>
      <Image src={movie.image} alt={movie.title} width={147} height={188} className='d-block m-auto' />
      <p className='text-small mt-2 text-custom-black'><strong>{movie.title}</strong></p>
      <p className='mt-2 text-primary-purple'><strong>R$ {formatPrice(movie.price)}</strong></p>
      <ButtonAddCart movie={movie}/>
    </div>
  )
}
