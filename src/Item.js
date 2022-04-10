import React from 'react'
import "./Item.css"


const Item = ({items}) => {
  console.log(items,"items")
  return (
    <div>
      
         <div className='all-cards'>
       { items.length>0?
        items.map((value)=>{
            const{id,Image,name,category,price} = value;
            return <div className='card'>
            <div className='card-left'>
                <img src={Image} alt="food" />
            </div>
            <div className='card-right'>
            <h2 style={{color:"black"}}>{name}</h2>
            <h4 >Delicious, fresh and healthy </h4>
            <div className='card-right-bottom'>
            <p>Price : {price}</p>
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
