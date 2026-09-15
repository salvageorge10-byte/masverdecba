"use client";

import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { CartItem } from "@/types/cart";

const STORAGE_KEY = "masverde-cart";

interface CartContextValue {
  items: CartItem[];
  isOpen: boolean;
  open: () => void;
  close: () => void;
  addItem: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  removeItem: (slug: string) => void;
  clear: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      // localStorage no disponible o dato corrupto: arrancamos con carrito vacío.
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const addItem: CartContextValue["addItem"] = (item) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === item.slug);
      if (existing) {
        return prev.map((i) =>
          i.slug === item.slug
            ? { ...i, quantity: i.quantity + (item.quantity ?? i.step) }
            : i
        );
      }
      return [...prev, { ...item, quantity: item.quantity ?? item.step }];
    });
    setIsOpen(true);
  };

  const updateQuantity = (slug: string, quantity: number) => {
    setItems((prev) =>
      prev
        .map((i) => (i.slug === slug ? { ...i, quantity: Math.max(i.step, quantity) } : i))
        .filter((i) => i.quantity > 0)
    );
  };

  const removeItem = (slug: string) => {
    setItems((prev) => prev.filter((i) => i.slug !== slug));
  };

  const clear = () => setItems([]);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.quantity * i.price, 0);

  const value = useMemo(
    () => ({
      items,
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      addItem,
      updateQuantity,
      removeItem,
      clear,
      totalItems,
      totalPrice,
    }),
    [items, isOpen, totalItems, totalPrice]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de CartProvider");
  return ctx;
}
