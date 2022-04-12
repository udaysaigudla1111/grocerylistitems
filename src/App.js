















import React,{useState} from 'react'
import Items from './items/items'
import { FaPlusCircle } from "react-icons/fa";
import '../src/App.css';
var count=2;
const btnlistitems=[
  {
      id:1,
      item:'Milk',

  },
  {
    id:2,
    item:'Coffee',
  },
 

];
const listitems=[
  {
      id:1,
      item:'Milk',
  },
  {
      id:2,
      item:'Coffee',
  },
  {
          id:3,
          item:'Oranges',
      },
      {
          id:4,
          item:'Bread',
      },
      {
          id:5,
          item:'Tomato',
      },
      {
          id:6,
          item:'Carrot',
      },
      {
          id:7,
          item:'Beetroot',
      },
      {
        id:8,
        item:'Meat',
    },
    {
      id:9,
      item:'Potato',
  },
  {
    id:10,
    item:'Ginger',
  },
 {
  id:11,
  item:'Jam',
 },
{
    id:12,
    item:'Banana',
 },
 {
      id:13,
      item:'Cucumber',
  },
  {
    id:14,
    item:'Ginger',
},
{
  id:15,
  item:'Spinach',
},
{
id:16,
item:'Garlic powder',
},
{
id:17,
item:'Meal maker',
},
{
id:18,
item:'Corn',
},
{
id:19,
item:'Salty snacks',
},
{
id:20,
item:'Beer',
},
];
const App = () => {
 
  const [items,setitems] = useState(listitems);
  const [btnitems,setbtnitems] = useState(btnlistitems);
  const btnclick = () => {
  
    ++count;  
      const id = items[count].id;
      const item = items[count].item;
      const newitem= {id,item};
    console.log(count);
        setbtnitems([...btnitems,newitem]) 
     
  //  console.log(items[0].item)
  
  }
  
  return (
    <div className='app'>
    <div className='plus'>
      <table height="50px" className='icon'>
        <tr>
    <td> <div> <FaPlusCircle onClick={btnclick}/> </div> </td>
      </tr>
      </table>
      
      </div>
  

   

   <div> <Items items={btnitems}></Items>  </div>
    
     
    
     

    </div>
  )
}

export default App