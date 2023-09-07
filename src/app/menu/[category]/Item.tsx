'use client'
import { useEffect, useState } from 'react'
import { Product } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
export default function Pizza({ id, title, desc, img, price }: Product) {
  const [hover, setHover] = useState(false)
  useEffect(() => {
    const interval = setInterval(() => {
      setHover((prevState) => !prevState)
    }, 2000)
    return () => clearInterval(interval)
  }, [])
  return (
    <Link
      className='border-r-2 border-b-2 pt-2 flex 
          border-red-500 w-full md:w-1/2 gap-6  lg:w-1/3 h-[60vh] flex-col px-2'
      href={`/product/${id}`}
      key={id}
    >
      <div className='relative  w-full  h-3/4  '>
        <Image
          className='object-contain px-2'
          fill
          src={img as string}
          alt='Pizza'
        />
      </div>
      <div className='flex w-full flex-col  justify-between   items-center content-center gap-2  '>
        <h2 className='text-2xl font-bold'>{title}</h2>
        <button
          className='  w-1/2  uppercase text-xl font-semibold p-1 bg-red-500 text-gray-100 rounded-md'
        >
          {hover ? 'Add to cart' : `${price}$`}
        </button>
      </div>
    </Link>
  )
}
