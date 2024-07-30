const colesURL =
  'https://www.coles.com.au/_next/data/20240116.01_v3.63.0/en/search.json'

interface colesResponse {
  pageProps: { searchResults: { results: ColesProduct[] } }
}
const filterProperties = {
  _type: 'PRODUCT',
  featured: false,
  availability: true,
}
interface ColesProduct {
  _type: string
  id: number
  adId: string /// must be null
  adSource: string /// must be null
  featured: boolean /// must be false for ADS
  name: string
  brand: string
  size: string
  availability: boolean
  imageUris: {
    altText: string
    uri: string
  }[]
  pricing: {
    now: number
    unit: {
      quantity: number
      ofMeasureQuantity: number
      ofMeasureUnits: string
      price: number
      ofMeasureType: string
      isWeighted: boolean
    }
    comparable: string
    promotionType: string
    onlineSpecial: boolean
  }
}
const uri = '/2/2523291.jpg'
const colesImage = (uri: string) =>
  `https://www.coles.com.au/_next/image?url=https://productimages.coles.com.au/productimages${uri}&w=256&q=90`
const colesFilter = (data: colesResponse) => {
  const results = data.pageProps.searchResults.results
  const filteredResults = results.filter((product) =>
    Object.entries(filterProperties).every(
      ([key, value]) => product[key as keyof ColesProduct] === value
    )
  )
  return filteredResults
}
interface productType {
  name: string
  price: number
  imageUrl: string
  size: string
  brand: string
  barcode?: number
  unit: string
  unitPrice: number
}
const colesRestruct = (filteredResults: ColesProduct[]) => {
  const restructuredData: productType[] = filteredResults.map((product) => ({
    name: product.name,
    price: product.pricing.now,
    brand: product.brand,
    size: product.size,
    imageUrl: colesImage(product.imageUris[0].uri),
    unit: `${product.pricing.unit.ofMeasureQuantity}${product.pricing.unit.ofMeasureUnits}`,
    unitPrice: product.pricing.unit.price,
  }))
  return restructuredData
}

const colesFetch = async ({ searchTerm }: { searchTerm: string }) => {
  const response = await fetch(
    `https://www.coles.com.au/_next/data/20240214.02_v3.68.0/en/search.json?q=bread`
  )
  console.log(response)
  const data: colesResponse = await response.json()
  console.log(data)
  const filteredData = colesFilter(data)
  const restructuredData = colesRestruct(filteredData)
  console.log(restructuredData)
}

colesFetch({ searchTerm: 'bread' })
