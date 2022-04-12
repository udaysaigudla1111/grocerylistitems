













import React,{useState} from 'react'
import '../items/items.css';
//import { FaPlusCircle } from "react-icons/fa";
const Items = (props) => {
    var count=1;
    const [searchTerm,setSearchTerm] = useState('');
    const [itemmm,setitemmm] = useState('');
  
    const search = (event) => {
        setSearchTerm(event.target.value);
    }
    const btnclick = () => {
         ++count;
      
    }
  return (
    <div className='data'>
           
          <div>
            <table border="5" height="50px" className='tble'>
                <tr>
      <td> <div> <input type="text" placeholder='Search...'className='input' onChange={search}></input> </div> </td>
        </tr>
        </table>
        
    {/*}    <div><FaPlusCircle onClick={btnclick}/></div> */}
      </div>
      <div>
        {
            props.items.filter((val => {
        
                    
                
                if(searchTerm === ""){
                    return val;
                }
                else if(val.item.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val;
                }
                    
               
  
            })).map((item) =>
                (  
                    <div key={item.id} >
                        <table  width="312px" className='tble'>
                            <tr>
                       <td> <div className='items'>{item.item}</div> </td>
                        </tr>
                        </table>
                        </div>
                ) 
            )
        }
        </div>

    </div>
  )
}

export default Items