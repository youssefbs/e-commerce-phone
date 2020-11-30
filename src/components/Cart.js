import React ,{useContext} from 'react'
import { PhonesContext } from '../context/PhonesContext';
import {Link} from 'react-router-dom'

const Cart=()=>{
    const {cart,AddQuan,SubQuan}=useContext(PhonesContext)

    const total=()=>{
        let som=0;
        cart.forEach(element => {
            som=som+element.price
        });
        return som
    }

    return(
        <div>
            {

                cart.map((product,index)=>{
                  return(
                    <ul key={index} className='cartItem'>
                        <li>Name:<br /> {product.title}</li>
                        <li>Price:<br /> {product.price}</li>
                        <li>Quantite:<br /> <button onClick={()=>AddQuan(product)}>+</button> {product.quantite} <button onClick={()=>SubQuan(product)}>-</button></li>
                    </ul>
                  ) 

                })
            }
            <p>Montant Total={total()}</p>
            <Link to=''><button>Payer</button></Link>
            <Link to='/'> <button>Go to shop</button> </Link>
        </div>
    )
}

export default Cart;