import prisma from '@/utils/connect'
import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2023-08-16',
})

export const POST = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params
  const order = await prisma.order.findUnique({
    where: {
      id: id,
    },
  })
  if (!order) return new NextResponse('Order Not Found', { status: 404 })
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 100 ,
    currency: 'usd',
    automatic_payment_methods: {
      enabled: true,
    },
  })
  await prisma.order.update({
    where:{
        id:id
    },
    data:{intent_id:paymentIntent.id}
  })
  return new NextResponse(
    JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    { status: 200 }
  )
}
