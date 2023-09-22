'use client'
import React, { useEffect } from 'react'

const page = async () => {
  console.log(
    fetch(
      'https://lms.uwa.edu.au/bbcswebdav/pid-3410520-dt-content-rid-43310264_1/courses/STAT1400_SEM-2_2023/2023_S2_Lab_week_6.html'
    )
  )
  return <div></div>
}

export default page
