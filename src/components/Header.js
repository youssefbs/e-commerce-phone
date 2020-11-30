import React from 'react'
import {Link} from 'react-router-dom'
const Header=()=>{
    return(
        <header>
            <p><img  src='' alt=''/></p>
             <h1> <Link to='/'><span>Product </span> </Link></h1>
            <Link to='/cart'> <button>My Cart</button> </Link>
        </header>
    )
}

export default Header