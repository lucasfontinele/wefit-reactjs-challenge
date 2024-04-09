import { create } from 'zustand'

type Product = {
  id: number
  title: string
  price: number
  image: string
  quantity: number
}

export type CartStore = {
  items: Array<Product>
  addItem: (item: Product) => void
  removeItem: (item: Product) => void
}

export const useCart = create<CartStore>((set) => ({
  addItem: (item) => set((state) => {
    const index = state.items.find(m => m.id === item.id)

    if (index) {
      return {
        items: [
          ...state.items,
          {
            ...index,
            quantity: index.quantity + 1,
          }
        ],
      }
    }

    return { items: [...state.items, { ...item, quantity: 0 }] }
  }),
  items: [],
  removeItem: (item) => set((state) => ({ items: state.items.filter((i) => i.id!== item.id) })),
}))
