import React,{useState,  createContext} from 'react';

export const PhonesContext=createContext();


const PhonesContextProvider=(props)=>{
    const [cart,setCart]=useState([]);

    const recherche=(arr,obj)=>{
        let n=arr.length;
        console.log(n);
        for(let i=0;i<n;i++){
            if(arr[i].id==obj.id){
                return i
            }
        }
        return -1
    }


    const AddQuan=(phone)=>{
        let arr=[...cart]
        let pos=recherche(cart,phone);
        let price=arr[pos].price/arr[pos].quantite
        arr[pos].quantite=arr[pos].quantite+1;
        arr[pos].price=arr[pos].price+price
        setCart(arr)
    }

    const SubQuan=(phone)=>{
        let arr=[]
        if(phone.quantite==1){
            arr=cart.filter((car)=>{
                return car.id!=phone.id
            })
        }else{
            arr=[...cart];
            let pos=recherche(cart,phone);
            let price=arr[pos].price/arr[pos].quantite
            arr[pos].quantite=arr[pos].quantite-1;
            arr[pos].price=arr[pos].price-price
        }
        setCart(arr)
    }

    const AddCart=(phone)=>{
        let pos=recherche(cart,phone);
        console.log(pos);
        console.log('pos='+pos)
        if(pos===-1){
            setCart([...cart,phone])
        }else{
            let arr=[...cart]
            arr[pos].quantite=arr[pos].quantite+1;
            arr[pos].price=arr[pos].price+phone.price
            setCart(arr)
        }
    }

    return(
        <PhonesContext.Provider value={{cart,AddCart,AddQuan,SubQuan}}>
            {props.children}
        </PhonesContext.Provider>
    )
}

export default PhonesContextProvider;