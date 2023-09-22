import { NextRequest, NextResponse } from 'next/server'
import { getAuthSession } from '../auth/[...nextauth]/route'
import prisma from '@/utils/connect'
export const GET = async (req: NextRequest) => {

  const session = await getAuthSession()
  if (session?.user.isAdmin) {
    const orders = await prisma.order.findMany()
    return new NextResponse(JSON.stringify(orders), { status: 200 })
  }

  const orders = await prisma.order.findMany({
    where: {
      userEmail: session?.user.email!,
    },
  })


  return new NextResponse(JSON.stringify(orders), { status: 200 })
}
