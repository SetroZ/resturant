import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='flex justify-around uppercase text-red-500 text-lg  items-center pb-2'>
      <Link href='/'>MASSIMO</Link>
      <p>
        ALl rights reserved
      </p>

      
      </div>
  )
}

export default Footer