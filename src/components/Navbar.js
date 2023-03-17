import React from 'react';
import { CartState } from '../context/Context';
import cartimg from '../img/cartimg.png';

const Navbar = () => {

  const { state: { cart } } = CartState();

  return (
    <div className= "Navbar sticky   bg-secondary h-28 w-full p-3 flex justify-between text-[#100E3A] sm:bg-primary">
        <span className="Logo font-extrabold font-mono text-[30px] ">E-commerce</span>
        <div className="w-[77px] h-[36px] rounded-full bg-primary drop-shadow-md flex justify-center items-center gap-[5px]">
            <span>
             <img src={cartimg} alt="cart" className="h-[13px] w-[18px]"/>
            </span>
            <span className="font-bold text-[15px] text-[#100E3A]">{cart.length}</span>
        </div>
    </div>
  )
}

export default Navbar