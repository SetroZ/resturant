import { NextResponse } from 'next/server'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export const GET = async () => {
  try {
    const categories = await prisma.category.findMany()

    return new NextResponse(JSON.stringify(categories), { status: 200 })
  } catch (err) {
    console.log(err)
    return new NextResponse(JSON.stringify(err), { status: 500 })
  }
}

export const POST = () => {
  return new NextResponse('hello', { status: 200 })
}
