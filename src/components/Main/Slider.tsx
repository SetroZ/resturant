'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
const images = [
  {
    id: 1,
    text: 'always hot, crispy and delicious',
    img: '/slide1.png',
  },
  {
    id: 2,
    text: 'always hot, crispy and delicious',
    img: '/slide2.png',
  },
  {
    id: 3,
    text: 'always hot, crispy and delicious',
    img: '/slide3.jpg',
  },
]

export default function Slider() {
  const [sliders, setSlider] = useState(0)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSlider((prevslider) => {
  //       return prevslider == images.length - 1 ? 0 : prevslider + 1
  //     })
  //   }, 3000)
  //   return () => clearInterval(interval)
  // }, [sliders])

  return (
    <div className=' flex flex-col h-[calc(100vh-100px)] lg:flex-row '>
      <div className=' flex flex-col bg-red-100   justify-center items-center  w-full gap-10  flex-1 '>
        <h2 className=' px-3 text-center uppercase text-red-500 font-bold text-4xl md:text-6xl  '>
          {images[sliders].text}
        </h2>
        <button className='p-3  bg-red-500 rounded-md text-gray-100 font-bold   '>
          {' '}
          Order Now
        </button>
      </div>
      <div className='  w-full relative flex-1  '>
        <Image
          src={images[sliders].img}
          alt='slider'
          fill
          className='object-cover'
        />
      </div>
    </div>
  )
}
