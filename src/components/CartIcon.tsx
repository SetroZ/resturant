<<<<<<< HEAD
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  return (
    <Link href="/cart" className="flex items-center gap-4">
      <div className="relative w-8 h-8 md:w-5 md:h-5">
        <Image src="/cart.png" alt="" fill />
      </div>
      <span>Cart (3)</span>
    </Link>
  );
};

export default CartIcon;
=======
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
>>>>>>> bafeda57f5e1fa8e7486b9ea5a01b80a8902d083
