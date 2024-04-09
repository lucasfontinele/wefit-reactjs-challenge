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
  addItem: (item: Omit<Product, 'quantity'>) => void
  removeItem: (id: number) => void
}

export const useCart = create<CartStore>((set) => ({
  addItem: (item) => set((state) => {
    const index = state.items.findIndex(m => m.id === item.id)

    if (index > -1) {
      const items = [...state.items]

      items[index].quantity += 1

      return {
        items,
      }
    }

    return { items: [...state.items, { ...item, quantity: 1 }] }
  }),
  items: [],
  removeItem: (item) => set((state) => ({ items: state.items.filter((i) => i.id === item) })),
}))
