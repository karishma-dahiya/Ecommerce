import React, { useState } from 'react'


import Product from './Product';

const Products = ({ item }) => {

  const [showBtn, setShowbtn] = useState(false);

  const handlerClick = ()=> {
      setShowbtn(!showBtn);
  }
  

  return (
 
    

    <div className="flex-1 flex-col px-5 ">
      <div key={item.id} className="flex flex-col justify-between px-1">
          <span className="font-bold mt-2 font-sans text-[30px] sm:text-[16px]">{item.name} {'>'}  </span>
          <button onClick = { () => setShowbtn(!showBtn)} className="font-bold text-[12px] text-[#5DA9E9] lg:hidden">View all</button>
      </div>
      <div className=" flex flex-row sm:flex ">

      {(showBtn ? ((item.product).slice(0,3)): (item.product) ).map((p) =>(
        <Product key={p.id} p={p}/>
      ))}             
      </div>
      
            
        
    </div>
    
  )
}

export default Products