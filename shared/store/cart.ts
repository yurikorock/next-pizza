import { create } from "zustand";
import { getCartDetails } from "../lib";
import { Api } from "../services/api-client";
import { CartStateItem } from "../lib/get-cart-details";

export interface CartState {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  items: CartStateItem[];

  /* Отримати товари з кошику */
  fetchCartItems: () => Promise<void>;

  /* Запит на оновлення кількості товара */
  updateItemQuantity: (id: number, quantity: number) => Promise<void>;

  /* Запит на добавлення товара в корзину */
  //   !!!!!!!!!!!!!!!!
  addCartItem: (values: any) => Promise<void>;

  /* Запрос на видалення товара з корзини */
  removeCartItem: (id: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
  loading: true,
  error: false,
  totalAmount: 0,
  items: [],

  fetchCartItems: async () => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.getCart();
      set(getCartDetails(data));
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  updateItemQuantity: async (id: number, quantity: number) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.updateItemQuantity(id, quantity);
      set(getCartDetails(data));
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  removeCartItem: async (id: number) => {},

  addCartItem: async (vaues: any) => {},
}));
