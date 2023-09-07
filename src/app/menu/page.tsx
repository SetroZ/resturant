import Image from 'next/image'
import React from 'react'
import { menu } from '@/data'
import Link from 'next/link'
export default function page() {
  return (
    <div className='h-[calc(100vh-146px)]  flex   justify-center items-center w-full'>
      <div className='flex w-full h-full  flex-col p-3 lg:flex-row lg:w-[99%] lg:h-1/2   '>
        {menu.map((item) => {
          return (
            <Link
              className='flex-1 flex  '
              key={item.id}
              href={`menu/${item.slug}`}
            >
              <div className={`bg-cover w-full text-${item.color}`} style={{ backgroundImage: `url(${item.img})` }}>
                <div className=' h-full py-2 pl-4 flex gap-3 flex-col justify-around items-start  w-[60%]'>
                  <h2 className='text-2xl font-bold uppercase'>
                    {item.title}
                  </h2>
                  <p className='w-[25ch]'>
                    {item.desc}
                  </p>
                  <button className='font-bold text-xl'>Explore</button>
                </div>
              </div>
            </Link>
          )
        })}
        
      </div>
    </div>
  )
}
