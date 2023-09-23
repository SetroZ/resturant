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

// if (!session) {
//   router.push('/login')
// } else {
//   const data = await getData<OrderType>('orders', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       price: totalPrice,
//       products,
//       status: 'Not Paid!',
//       userEmail: session.user.email,
//     }),
//   })
//   router.push(`/pay/${data}`)
// }
// }
// TRUSTING THE CLIENT A BIT TOO MUCH HERE. NEEDS TO BE MODIFIED LATER
export const POST = async (req: NextRequest) => {
  const session = await getAuthSession()
  if (!session) return new NextResponse('Not Logged In', { status: 400 })
  const data = await req.json()
  const order= prisma.order.create({
    data:data
  })

}
