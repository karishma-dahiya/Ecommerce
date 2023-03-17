import React from 'react';


const Sidepanel = ({ data }) => {
  return (
    <div className="overflow-auto sticky top-0 max-h-[750px] flex sm:flex-row sm:h[60px]">

      <div className="Sidepanel py-3 px-4 flex flex-col gap-[20px] sm:flex-row ">
        {
          data.map((item)=>(

          <div className=" " key={item.id}>
            <div className=" h-[48px] w-[48px] bg-disabled flex justify-center items-center lg:hidden">
              <img src={item.img} alt="icon" className="h-[19px]"/>
            </div>
            <div className= "w-[200px] h-[40px] px-2 py-1 rounded-lg  text-lightgray text-[19px] font-extrabold text-left sm:bg-primary sm:text-[12px] sm:w-[18px] ">{item.name}</div>
          </div>
          ))
        }
        
      </div>
    </div>
  )
}

export default Sidepanel