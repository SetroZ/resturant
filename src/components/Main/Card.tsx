import Image from 'next/image'
import { Product } from '@/data'

export default function Card({ id, title, desc, img, price }: Product) {
  return (
    <div className='w-screen md:w-[50vw] lg:w-[33vw] h-[60vh] flex flex-col justify-center items-center content-center bg-red-100'>
      {/* Image container */}
      <div className=' flex-1 relative h-1/2 w-full   transition-all   hover:rotate-45 '>
        <Image
          src={img as string}
          alt='food image'
          fill
          className='object-contain      '
        />
        
      </div>
      {/* Text container */}
      <div className='flex-1 flex flex-col    items-center text-center gap-5'>
        <h3 className='font-bold text-3xl '>{title}</h3>
        <p className='px-3 font-semibold lg:text-sm min-h-[96px] '>{desc}</p>
        <p className='font-bold text-2xl'>{price}$</p>
        <button
          className='p-2 font-semibold text-white bg-red-500 
        rounded-md text-lg'
        >
            
          Add to Cart
        </button>
      </div>
    </div>
  )
}
