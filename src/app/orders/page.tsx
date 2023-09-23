'use client'
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import React from 'react'
import { getAuthSession } from '../api/auth/[...nextauth]/route'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { OrderType } from '@/types/types'
import Image from 'next/image'
import { toast } from 'react-toastify'

const OrdersPage = () => {
  const { data: session, status } = useSession()
  const queryClient = new QueryClient()
  const router = useRouter()

  if (status === 'unauthenticated') {
    router.push('/')
  }

  const { isLoading, error, data } = useQuery({
    queryKey: ['orders'],
    queryFn: () =>
      fetch('http://localhost:3000/api/orders').then((res) => res.json()),
  })
  const mutation = useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) => {
      return fetch(`http://localhost:3000/api/orders/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(status),
      })
    },
    onSuccess(data) {
      queryClient.invalidateQueries({ queryKey: ['orders'] })
      data.json().then((res) => toast.success(res.message))
    },
    onError(err) {
      toast.error('Something Went Wrong')
      console.log(err)
    },
  })
  const handleSubmit = (e: React.FormEvent, id: string) => {
    e.preventDefault()
    console.log('fu')
    const form = e.target as HTMLFormElement
    const input = form.elements[0] as HTMLInputElement
    const value = input.value
    mutation.mutate({ id, status: value })
  }

  if (isLoading || status == 'loading') {
    return <p>Loading...</p>
  }
  return (
    <div className='p-4 lg:px-20 xl:px-40 text-center'>
      <table className='w-full border-separate border-spacing-3'>
        <thead>
          <tr className='text-left'>
            <th className='hidden md:block'>Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className='hidden md:block'>Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: OrderType) => (
            <tr
              className={`text-sm md:text-base ${
                item.status.toLowerCase() == 'delivered'
                  ? 'bg-white'
                  : 'bg-red-100'
              }`}
              key={item.id}
            >
              <td className='hidden md:block py-6 px-1'>{item.id}</td>
              <td className='py-6 px-1'>{item.createdAt.slice(0, 10)}</td>
              <td className='py-6 px-1'>{item.price}</td>
              <td className='hidden md:block py-6 px-1'>
                {item.products[0].title}
              </td>
              {session?.user.isAdmin ? (
                <td>
                  <form
                    className='flex gap-2 p-2   '
                    onSubmit={(e) => handleSubmit(e, item.id)}
                  >
                    <input
                      className='  text-center  outline-red-300  rounded-md border-1 border-slate-100'
                      type='text'
                      placeholder={item.status}
                    />
                    <button className='bg-red-400 rounded-full p-2'>
                      <Image
                        width={25}
                        height={25}
                        src='/edit.png'
                        alt='edit'
                      />
                    </button>
                  </form>
                </td>
              ) : (
                <td className='py-6 px-1'>{item.status}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OrdersPage
