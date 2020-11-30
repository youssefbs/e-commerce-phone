import React from 'react';

const Phone=({info,setSelected})=>{

    const ClickItem=(e)=>{
        setSelected(info)
    }

    return(
        <div className='item' onClick={ClickItem}>
           <div id='img'> 
                <img src={info.img} alt=''/>
            </div>
            <ul>
                <li>{info.title}</li>
                <li>$ {info.price}</li>
            </ul>
        </div>
    )
}

export default Phone;