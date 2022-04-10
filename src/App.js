import React from 'react';
import './App.css';
import Item from './Item';
import Food from './Food';


function App() {
  const [items,setItems] = React.useState(Food)
  console.log(items)

  const handleClick = (categitem)=>{
  console.log(categitem)
  const newData = Food.filter((value)=>{
        return value.category===categitem;
  })
  setItems(newData)
  }
//  React.useEffect(()=>{
//     if (items.length>0){
//       setItems(Food)
//     } 
//   },[items])
  return (
    <div className="food">
      <h2 className='head-pos'>Place your Order</h2>
      <h3>Eat what makes you happy 😁</h3>

      <div className='foodpos'>
      <div className='category'>
            
      <button onClick={()=>setItems(Food)}>Home</button>
      <button onClick={()=> handleClick("breakfast")}>Breakfast</button>
      <button onClick={()=> handleClick("lunch")}>Lunch</button>
      <button onClick={()=> handleClick("dinner")}>Dinner</button>

      </div>
      <div className='itempos'>
      <Item items={items}/>
      </div>
      </div>
    </div>
  )
};


export default App;
