import { NextResponse } from 'next/server'

import prisma from '@/utils/connect'
export const GET = async () => {
  try {
    const categories = await prisma.category.findMany()

    return new NextResponse(JSON.stringify(categories), { status: 200 })
  } catch (err) {
    return new NextResponse(JSON.stringify(err), { status: 500 })
  }
}

export const POST = () => {
  return new NextResponse('hello', { status: 200 })
}
