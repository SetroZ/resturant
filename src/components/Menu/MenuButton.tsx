import React from 'react'
import { menuProps } from './props'
import Image from 'next/image'
export const MenuButton = ({ open, setOpen }: menuProps) => {
  return (
    <button className='md:hidden'>
      {!open ? (
        <Image
          src='/open.png'
          onClick={() => setOpen((prevstate) => !prevstate)}
          alt='menu button'
          width={20}
          height={20}
        />
      ) : (
        <Image
          src='/close.png'
          onClick={() => setOpen((prevstate) => !prevstate)}
          alt='menu button'
          width={20}
          height={20}
        />
      )}
    </button>
  )
}
export default MenuButton
