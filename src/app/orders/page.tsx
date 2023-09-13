import React from 'react'

export default function OrdersPage() {
  return (
    <div className='flex justify-center w-full items-center'>
      <table className='w-full m-10 border-separate border-spacing-3 '>
        <thead>
          <tr className='text-left'>
            <th>OrderID</th>
            <th>Date</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className='text-sm md:text-base bg-gray-200 even:bg-red-400 '>
            <td className='py-6 px-1  '>Test</td>
            <td className='py-6 px-1'>Test</td>
            <td className='py-6 px-1'>Test</td>
            <td className='py-6 px-1'>Test</td>
          </tr>
          <tr className=' text-sm md:text-base bg-gray-200 even:bg-red-100 '>
            <td className='py-6 px-1  '>Test</td>
            <td className='py-6 px-1'>Test</td>
            <td className='py-6 px-1'>Test</td>
            <td className='py-6 px-1'>Test</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
