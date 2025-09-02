import { createContext } from 'react';
import { Item } from '../types';

export interface AppContextType {
  cartItems: Item[]; 
  setCartItems: React.Dispatch<React.SetStateAction<any[]>>;
  totalQuantity: number;
  handleIncrease: (id: number) => void;
  handleDecrease: (id: number) => void;
  handleRemove: (id:number) => void;
  totalPrice: number;
}

const AppContext = createContext<AppContextType>({
  cartItems: [],
  setCartItems: () => {},
  totalQuantity: 0,
  handleIncrease: () => {},
  handleDecrease: () => {},
  handleRemove: () => {},
  totalPrice: 0,
});

export default AppContext;
