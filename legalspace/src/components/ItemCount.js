import React, { useState } from 'react'

const ItemCount = ({stock}) => {

   
   

    const [suma, setCount] = useState(0);
    console.log('asdkjahsdkh')

    const addHandler =()=>{
        if (suma< stock){
            setCount(suma+1)
        }
        
    }
    
    const resHandler =()=>{
        if (suma >0){
            setCount(suma-1)
        }
    }
  return (
      <>
        <div>Cantidad del producto</div>
        <button onClick={resHandler}> - </button>
        <strong> {suma} </strong>
        <button onClick={addHandler}> + </button>
        <br/>
        <button>Agregar al carrito</button>
      </>
  )
}

export default ItemCount