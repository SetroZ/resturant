import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
const UserLinks = () => {
  const { status } = useSession()
  return (
    <>
      {status == 'authenticated' ? (
        <div>
          <Link href='/orders'>Orders</Link>
          <button className='ml-4 cursor-pointer' onClick={() => signOut()}>
            LogOut
          </button>
        </div>
      ) : (
        <div className='flex items-center gap-5'>
          <Link href='/login'>login</Link>
        </div>
      )}
    </>
  )
}

export default UserLinks
