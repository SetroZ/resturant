<<<<<<< HEAD
import React from "react";

const OrdersPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
=======
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
>>>>>>> bafeda57f5e1fa8e7486b9ea5a01b80a8902d083
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
<<<<<<< HEAD
          <tr className="text-sm md:text-base bg-red-50">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">19.07.2023</td>
            <td className="py-6 px-1">89.90</td>
            <td className="hidden md:block py-6 px-1">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className="py-6 px-1">On the way (approx. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">19.07.2023</td>
            <td className="py-6 px-1">89.90</td>
            <td className="hidden md:block py-6 px-1">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className="py-6 px-1">On the way (approx. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">19.07.2023</td>
            <td className="py-6 px-1">89.90</td>
            <td className="hidden md:block py-6 px-1">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className="py-6 px-1">On the way (approx. 10min)...</td>
=======
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
>>>>>>> bafeda57f5e1fa8e7486b9ea5a01b80a8902d083
          </tr>
        </tbody>
      </table>
    </div>
<<<<<<< HEAD
  );
};

export default OrdersPage;
=======
  )
}
>>>>>>> bafeda57f5e1fa8e7486b9ea5a01b80a8902d083
