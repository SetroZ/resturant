'use client'

import { useState } from 'react'
import Menu from './Menu/Menu'
import { MenuButton } from './Menu/MenuButton'
import Link from 'next/link'
import CartIcon from './CartIcon'
const NavBar = () => {
  const user = false
  const [open, setOpen] = useState(false)
  return (
    <>
    
    
    <nav className='
    bg-white shadow-lg
      border-b-red-500 border-b-2 flex justify-center items-center 
      min-h-[60px]
      '>
      <ul
        className=' px-2  text-center uppercase
     flex flex-row justify-between items-center  w-full
       text-red-500 
      font-semibold text-xl 
      '
      
      >
        <div className=' hidden  md:flex gap-5'>
          {/* Left Links */}
          <Link href='/'>Homepage</Link>
          <Link href='/menu'>Menu</Link>
          <Link href='/'>Contact</Link>
        </div>
        <Link  className='text-3xl font-bold justif ' href='/'>Massimo</Link>
        <MenuButton open={open} setOpen={setOpen} />
        {/* Right Links */}
        <div className='hidden md:flex gap-4'>
          {user ? (
            <Link href='/orders'>Orders</Link>
          ) : (
            <div className='flex items-center gap-5'>
              <Link href='/Login'>login</Link>
              <CartIcon />
            </div>
          )}
        </div>
      </ul>

      {/* Mobile Menu */}
      
    </nav>
    <Menu open={open} setOpen={setOpen} />
    </>
    
  )
}

export default NavBar
