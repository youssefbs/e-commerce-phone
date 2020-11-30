import React from 'react'
import {storeProducts} from '../data'
import Phone from './Phone';


const Phones=({setSelected})=>{
    return(
        <div id='phones'>
           <h1 style={{textAlign:'center'}}>Our Product</h1>
           <div id='items'>
                {
                    storeProducts.map((product,index)=>{
                       return  <Phone info={product}  key={index} setSelected={setSelected}/>    
                    })
                } 
          </div> 
        </div>
    )
}

export default Phones;