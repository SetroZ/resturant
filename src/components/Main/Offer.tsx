import Image from 'next/image'
import React from 'react'
import Timer from './Timer'
export default function Offer() {
  return (
    <div className=' text-white bg-black h-[50vh] flex flex-col md:flex-row '>
      {/* Text container */}
      <div className='flex-1 p-5 flex flex-col gap-3 justify-center  items-center text-center'>
        <h2 className='  font-semibold md:text-5xl leading-tight text-2xl '>
          Delicious burger and french fries
        </h2>
        <p className=''>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores id
          ab error obcaecati deserunt doloremque delectus officiis minima, aut
          nostrum, nulla omnis! Ipsam ut tempora cum, inventore iusto commodi
          quas.
        </p>
        <h3 className='text-g'></h3>
        <Timer />
        <button
          className='p-2 text-center font-semibold text-white bg-red-500 
        rounded-md text-lg '
        >

          Buy now
        </button>
      </div>
      {/* Image container */}
      <div className='relative  flex-1'>
        <Image
          src='/offerProduct.png'
          alt='offer'
          fill
          className='object-contain'
        />
      </div>
    </div>
  )
}
