import React from 'react';
import { CartState } from '../context/Context';


const Product = ( { p }) => {

  const{
    state: { cart },
    dispatch,
  } = CartState();



  return (
    <div className="flex flex-row sm:flex sm:flex-wrap">
        
            <div 
              className="h-[220px] w-[140px] p-2 flex flex-col sm:h-[97px] sm:w-[117px] mb-5" >

                <div>
                    <img  src={p.img} alt="icon" className="h-[100px] w-[100px]"/>
                    <span>

                      {cart.some((pro) => pro.id===p.id) ?<button 
                         onClick= { () =>{
                          dispatch({
                            type: "-",
                            payload: p,
                          });
                        }}
                        className="h-[42px] w-[42px] relative left-[75px] top-[-40px]  rounded-full bg-green  text-primary text-[25px] font-mono">-
                    </button> : 
                    <button 
                    onClick= { () =>{
                      dispatch({
                        type: "+",
                        payload: p,
                      });
                    }}
                      className="h-[42px] w-[42px] relative left-[75px] top-[-40px] rounded-full bg-green text-center text-primary text-[25px] font-mono">+
                    </button>
                    }
                    
                    </span>
                </div>
                <div  className="font-bold text-[20px] sm:text-[16px]">{p.price}</div>
                <div  className="font-semibold text-[16px] sm:text-[14px]">{p.name}</div>
                <div  className="text-gray text-[16px] sm:text-[12px]">{p.qty}</div>
            </div>
        
    </div>
  )
}

export default Product;