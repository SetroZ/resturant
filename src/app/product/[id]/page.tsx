import React from 'react'
import Counter from './Counter'
import { singleProduct } from '@/data'
import Image from 'next/image'

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div className=' h-[calc(100vh-146px)] w-full px-2 gap-3 flex flex-col md:flex-row md:items-center'>
      <div className='relative h-[60%] md:w-1/3'>
        <Image
          src={singleProduct.img as string}
          fill
          className='object-contain'
          alt='product image'
        />
      </div>
      <div className='  flex flex-col  text-red-500 gap-2 md:w-2/3'>
        <h2 className=' uppercase font-bold text-2xl '>
          {singleProduct.title}
        </h2>
        <p className='font-semibold'> {singleProduct.desc}</p>
        <Counter {...singleProduct} />
      </div>
    </div>
  )
}

export default page
