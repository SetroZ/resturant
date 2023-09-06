import React from 'react'
import { pizzas } from '@/data'

import Item from './Item'
const page = () => {


  return (
    <div className=' uppercase flex flex-wrap text-red-500  whitespace-nowrap '>
      {pizzas.map((pizza) => {
        return <Item {...pizza} key={pizza.id} />
      })}
    </div>
  )
}

export default page
