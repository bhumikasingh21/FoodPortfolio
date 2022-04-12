import React from 'react'
import "./Item.css"
import Loader from './Loader'


const Item = ({items,page}) => {
  console.log(items,"items")
  return (
    <div>
         <div className='all-cards'>
       { items.length>0?
        items.slice(page*9,page*9+9).map((value)=>{
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
            
        }):<Loader/>
        
      }</div>
        
    </div>
  )
}

export default Item
