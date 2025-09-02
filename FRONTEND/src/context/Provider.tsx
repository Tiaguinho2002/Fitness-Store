import { useState, ReactNode, useEffect } from 'react';
import AppContext, { AppContextType } from './AppContext';
import { Item } from '../types';

interface ProviderProps {
  children: ReactNode;
}

export default function Provider({ children }: ProviderProps) {
  const [cartItems, setCartItems] = useState<Item[]>(() => {
    try {
      const savedCart = localStorage.getItem('cartItems');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (e) {
      console.error("Failed to load cart from localStorage:", e);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const totalQuantity = cartItems.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0
  );

  const handleIncrease = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    );
  };

  const handleDecrease = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && (item.quantity || 1) > 1
          ? { ...item, quantity: (item.quantity || 1) - 1 }
          : item
      )
    );
  };

  const handleRemove = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };


  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  const value: AppContextType = {
    cartItems,
    setCartItems,
    totalQuantity,
    handleIncrease,
    handleDecrease,
    handleRemove,
    totalPrice,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}