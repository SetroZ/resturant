<<<<<<< HEAD
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-red-500 flex items-center justify-between">
      <Link href="/" className="font-bold text-xl">MASSIMO</Link>
      <p>© ALL RIGHTS RESERVED.</p>
    </div>
  );
};

export default Footer;
=======
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
>>>>>>> bafeda57f5e1fa8e7486b9ea5a01b80a8902d083
