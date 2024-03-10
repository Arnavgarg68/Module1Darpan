import React from "react";
import cardsdata from "./cardlist"
const Cards =({title,content})=>{
    return(
        <div className="mt-8">
      <div className="bg-gray-200 p-4 rounded-lg flex flex-col items-center justify-between hover:bg-green-400">
        {/* Icon */}
        <div className="icon w-20 h-20 bg-blue-200 rounded-full mb-5"></div>
        
        {/* Content */}
        <div className="content mt-auto" >{content}</div>
      </div>
    </div>
  );
};
function CardComponent(){
  return(
<div class="grid gap-4 grid-cols-3 ">
    {cardsdata.map((card,index)=>(
      <Cards key={index} title={card.title} content={card.content}/>
    ))}
   </div>
  );
}


    

export default CardComponent