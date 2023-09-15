<<<<<<< HEAD
import Price from "@/components/Price";
import { singleProduct } from "@/data";
import Image from "next/image";
import React from "react";

const SingleProductPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center">
      {/* IMAGE CONTAINER */}
      {singleProduct.img && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image
            src={singleProduct.img}
            alt=""
            className="object-contain"
            fill
          />
        </div>
      )}
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options}/>
      </div>
    </div>
  );
};

export default SingleProductPage;
=======
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
>>>>>>> bafeda57f5e1fa8e7486b9ea5a01b80a8902d083
