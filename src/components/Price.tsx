'use client'

import React, { useEffect, useState } from 'react'
import isServerSide from '@/utils/isServerSide'
import { useCartStore } from '@/utils/store'
import { ProductType } from '@/types/types'
import { toast } from 'react-toastify'

const Price = ({ price, id, title, img, options }: ProductType) => {
  const [total, setTotal] = useState(price)
  const [quantity, setQuantity] = useState(1)
  const [selected, setSelected] = useState(0)
  const { addToCart } = useCartStore()

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    )
  }, [quantity, selected, options, price])
  const HandleClick = () => {
    addToCart({
      id: id,
      title: title,
      price: price,
      quantity: quantity,
      img: img as string,
      size: options[selected].title,
    })
    toast.success(`Added ${quantity} ${options[selected].title} ${title}s`)
  }

  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-2xl font-bold'>${total}</h2>
      {/* OPTIONS CONTAINER */}
      <div className='flex gap-4'>
        {options?.map((option, index) => (
          <button
            key={option.title}
            className='min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md'
            style={{
              background: selected === index ? 'rgb(248 113 113)' : 'white',
              color: selected === index ? 'white' : 'red',
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* QUANTITY AND ADD BUTTON CONTAINER */}
      <div className='flex justify-between items-center'>
        {/* QUANTITY */}
        <div className='flex justify-between w-full p-3 ring-1 ring-red-500'>
          <span>Quantity</span>
          <div className='flex gap-4 items-center'>
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {'<'}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {'>'}
            </button>
          </div>
        </div>
        {/* CART BUTTON */}
        <button
          onClick={() => HandleClick()}
          className='uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500'
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default Price
