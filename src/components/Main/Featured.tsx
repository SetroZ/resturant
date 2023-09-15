import Image from 'next/image'
import React from 'react'
import { Product, featuredProducts } from '@/data'
import Card from './Card'


export default function Featured() {
  return (
    <div className='w-screen overflow-x-scroll text-red-500'>
      {/* Wrapper */}
      <div className='w-max flex'>
        {featuredProducts.map((product) => {
          return <Card {...product} key={product.id} />
        })}
        {/* single item */}
      </div>
    </div>
  )
}
