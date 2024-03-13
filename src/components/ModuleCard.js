import cardsdata from "./Cardlist";
import Cards from "./EachModule"
export default function ModuleCard() {
  
  return (
    <div className="modules-frame">
    {cardsdata.map((card,index)=>(
      <Cards key={index} title={card.title} content={card.content}/>
    ))}
   </div>
  )
}
