
import React ,{createContext, useContext, useReducer} from 'react'
import { data } from '../data';
import { cartReducer } from './Reducers';
const Cart = createContext();

const Context = ({ children }) => {

  const[state,dispatch] = useReducer(cartReducer,{
    data: data,
    cart: []
  });
    

  return (
    <Cart.Provider value={{state,dispatch}}>{children}</Cart.Provider>
  )
};

export default Context;

export const CartState = () => {
    return useContext(Cart);
}