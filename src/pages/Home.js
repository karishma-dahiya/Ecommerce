import React, { useState, useRef } from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Sidepanel from '../components/Sidepanel'
import { CartState } from '../context/Context'

const Home = () => {


  const {
    state: { data },
  } = CartState();
  console.log(data);

  return (
    <div>
        <Navbar/>
        

        <div className="flex flex-row sm:flex sm:flex-col" >
            <Sidepanel data={ data } />
            <div className="px-3">

            {
              
              data.map((item) =>(
                

                  <Products key={item.id} 
                  item={ item }
                 
                   />
                

              ))
            }
            </div>
        </div>
        
    </div>
  )
}

export default Home;