import React from 'react'
import burger from "./assets/burger.jpg"
import "./Item.css"


const Item = ({items}) => {
  console.log(items,"items")
  return (
    <div>
      
         <div className='all-cards'>
       { items.length>0?
        items.map((value)=>{
            const{id,name,category,price} = value;
            return <div className='card'>
            <div className='card-left'>
                <img src={burger} alt="BURGER" />
            </div>
            <div className='card-right'>
            <h2 style={{color:"black"}}>{name}</h2>
            <h4 >Delicious, fresh and healthy </h4>
            <div className='card-right-bottom'>
            <p>Price : 40 Rs</p>
            <button>Order Now</button>
            </div>
            </div>
            </div>
            
        }):""
        
      }</div>
        
    </div>
  )
}

export default Item
