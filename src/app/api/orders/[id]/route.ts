import { getAuthSession } from '@/app/api/auth/[...nextauth]/route'
import prisma from '@/utils/connect'
import { NextRequest, NextResponse } from 'next/server'

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const session = await getAuthSession()
  if (!session?.user.isAdmin) {
    return
  }

  try {
    const { id } = params
    const body = await req.json()
    console.log(body)
    await prisma.order.update({
      where: {
        id: id,
      },
      data: { status: body },
    })
    return new NextResponse(JSON.stringify({ message: 'order updated ' }))
  } catch (err) {
    return new NextResponse(err as string)
  }
}
