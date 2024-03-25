import { create } from 'zustand'

export type CartStore = {
  items: []
}

export const useCart = create()
