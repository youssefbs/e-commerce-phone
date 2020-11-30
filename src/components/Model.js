import React, { useContext } from 'react';
import { PhonesContext } from '../context/PhonesContext';


const Model=({selected,setSelected})=>{
    
    const  {AddCart}=useContext(PhonesContext)
    const closeModel=(e)=>{
        if(e.target.classList.contains('backdrop')){
            setSelected(null)
        }
    }

    const AddPhone=()=>{
        const obj={
            id:selected.id,
            title:selected.title,
            price:selected.price,
            quantite:1
        }
        AddCart(obj);
    }

    return(
        <div className='backdrop' onClick={closeModel}>
            <div className='phone' style={{textAlign:'center'}}>
                <img src={selected.img} alt='' style={{display:'block'}}/>
                <ul className='info'>
                    <li>Name: {selected.title}</li>
                     <li>Price: {selected.price}</li>
                     <li>Company: {selected.company}</li>
                     <li>Info: {selected.info}</li>
                     <p>
                        <button onClick={AddPhone}>Add To Cart</button>
                        <button>More Info</button>
                     </p>
                </ul>
                
            </div>
        </div>
    )
}

export default Model;