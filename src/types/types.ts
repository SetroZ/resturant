export interface MenuType {
  id: string
  title: string
  desc: string
  color: string
  img: string
  slug: string
}

export interface ProductType {
  id: string
  title: string
  desc: string
  color: string
  img?: string | null
  price: number
  options: { title: string; additionalPrice: number }[] // You may want to create a more specific type for options
}

export interface OrderType {
  id: string
  price: number
  products: []
  status: string
}
