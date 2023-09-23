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
  options: { title: string; additionalPrice: number }[] 

}

export interface CartItemType {
  id: string
  title: string
  price: number
  quantity: number
  img: string
  size:string
}
export interface OrderType {
  id: string
  price: number
  products: CartItemType[]
  status: string
  createdAt: string
}

export interface CartType {
  products: CartItemType[]
  totalItems: number
  totalPrice: number
}

export interface ActionTypes {
  addToCart: (item: CartItemType) => void
  removeFromCart: (item: CartItemType) => void
}
