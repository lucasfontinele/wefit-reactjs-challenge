import axios from "axios"

type Product = {
  id: number
  title: string
  price: number
  image: string
}

type ProductResponse = Array<Product>

export async function getMovies(searchTerm: string) {
  const { data } = await axios.get<ProductResponse>(`http://localhost:3000/products?title=${searchTerm}`)

  return data
}
