import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { menuProps } from './props'
import CartIcon from '../CartIcon'
const links = [
  { id: 0, title: 'Homepage', url: '/' },
  { id: 1, title: 'Menu', url: '/menu' },
  { id: 2, title: 'Working Hours', url: '/' },
  { id: 3, title: 'Contact', url: '/' },
]
const Menu = ({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [user, setUser] = useState(false)
  return (
    open && (
      <ul
        className=' transition-all uppercase   bg-red-500 text-white

       flex flex-col justify-center items-center absolute
         w-full h-[calc(100vh-110px)] gap-14 font-semibold
          z-10 md:hidden  text-4xl
       '
      >
        {links.map((item) => (
          <li
            key={item.id}
            onClick={() => setOpen((prevState: boolean) => !prevState)}
          >
            <Link
              href={item.url}
            >
              {item.title}
            </Link>
          </li>
        ))}

        {user ? (
          <Link href='orders'>orders</Link>
        ) : (
          <Link href='login'>login</Link>
        )}
        <CartIcon />
      </ul>
    )
  )
}

export default Menu
