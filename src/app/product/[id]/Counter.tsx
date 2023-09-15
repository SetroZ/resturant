'use client'
// export type Product = {
//     id: number
//     title: string
//     desc?: string
//     img?: string
//     price: number
//     options?: { title: string; additionalPrice: number }[]
//   }
import React, { useEffect } from 'react'
import { Product } from '@/data'
import { useState } from 'react'

export default function Counter({ id, price, options }: Product) {
  const [sizePrice, setSizePrice] = useState(price)
  const [quantity, setQuantity] = useState(1)
  const [totalPrice, setTotalPrice] = useState(price)

  useEffect(() => {
    setTotalPrice(sizePrice * quantity)
  }, [quantity, sizePrice])

  function changeSize(additionalPrice: number) {
    setSizePrice(price + additionalPrice)
  }

  return (
    <div className='flex flex-col w-full gap-2 '>
      <h3 className='font-bold text-2xl '>${totalPrice.toFixed(2)}</h3>
      <div className='flex flex-col  gap-3 items-center md:items-start'>
        <div className='flex gap-3 '>
          {options?.map((item) => {
            return (
              <button
                onClick={() => changeSize(item.additionalPrice)}
                key={item.title}
                id={item.title}
                className={`border-2 font-semibold 
              p-2 border-red-600 rounded-md min-w-[6rem]
              ${
                item.additionalPrice + price == sizePrice
                  ? 'bg-red-500  text-white'
                  : 'bg-white'
              }
              `}
              >
                {item.title}
              </button>
            )
          })}
        </div>
        <div className=' flex justify-between w-full h-10   border-2 border-red-500'>
          <div className='flex justify-between p-2 content-center items-center w-2/3  '>
            <h4 className='font-semibold text-lg'>Quantity</h4>
            <div className='  text-lg  flex items-center justify-center gap-3 font-semibold '>
              <button
                onClick={() =>
                  setQuantity((prevstate) =>
                    prevstate <= 1 ? prevstate : prevstate - 1
                  )
                }
                className='   '
              >
                {'<'}
              </button>
              <p>{quantity}</p>
              <button
                onClick={() => setQuantity((prevstate) => prevstate + 1)}
                className=' '
              >
                {'>'}
              </button>
            </div>
          </div>
          <button className='bg-red-500 hover:bg-red-600  p-1 text-white uppercase font-semibold w-1/3'>
            add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
