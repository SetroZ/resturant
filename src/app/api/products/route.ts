import { NextResponse, NextRequest } from 'next/server'
import prisma from '@/utils/connect'

export const GET = async (req: NextRequest) => {
  console.log('sda')
  const { searchParams } = new URL(req.url)
  const cat = searchParams.get('cat')
  try {
    const products = await prisma.product.findMany({
      where: {
        ...(cat ? { catSlug: cat } : { isFeatured: true }),
      },
    })
    return new NextResponse(JSON.stringify(products), { status: 200 })
  } catch (err) {

    return new NextResponse('something went wrong', { status: 500 })
  }
}
