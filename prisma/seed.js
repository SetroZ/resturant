import prisma from '@/utils/connect'
import { menu, featuredProducts, pizzas } from '@/data'

async function seedData() {
  // Seed categories
  const categories = await prisma.category.createMany({
    data: menu.map(({ title, desc, img, color, slug }) => ({
      title,
      desc,
      img,
      color,
      slug,
    })),
  })

  // Seed products
  const products = await prisma.product.createMany({
    data: [...featuredProducts, ...pizzas].map((product) => ({
      title: product.title,
      desc: product.desc,
      img: product.img,
      price: product.price,
      options: { create: product.options },
      category: {
        connect: { slug: menu.find((c) => c.title === product.title)?.slug },
      },
    })),
  })

  console.log('Data seeded successfully')

  await prisma.$disconnect()
}

seedData()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()

  })