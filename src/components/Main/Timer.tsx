
'use client'
import React from 'react'
import CountDown from 'react-countdown'
const EndDate = new Date('2023-09-15')
export default function Timer() {
  return (
    <CountDown  date={EndDate} className='text-yellow-400 font-bold text-2xl'/>
  )
}
