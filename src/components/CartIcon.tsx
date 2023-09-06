import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
const CartIcon = () => {
  const [cart, setCart] = useState(0)
  return (
    <Link href='/cart' 
    className='flex gap-2 align-top items-start'>
       <Image src="/cart.png" alt="cart"  width={40} height={50}/>
       <p className='self-center'> Cart {cart}</p>
    </Link>
  )
}

export default CartIcon