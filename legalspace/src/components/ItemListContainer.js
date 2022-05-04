import React from 'react';
import { useEffect } from 'react';

const ItemListContainer = () => {

    const items = ["producto 1", "producto 2", "producto 3"];
    useEffect(() => {
      console.log("kashd");

      const promesa = new Promise((res, rej)=>{
        const rand = Math.random()
        console.log("numero randon", rand);

        setTimeout(()=>{
            if(rand>0.5){
                res('Promesa satisfecha')
            }else{
                rej('Rechazada!')
            }
        }, 5000)
      })
      promesa
        .then((result)=>{
            console.log(result)
        })
        .catch((err)=>{
            console.log('la promesa fue rechazada: ', err)
        })
        console.log("se termino de ejecutar el useEffct  ")
    }, [])
    

  return (
    <div style={{border: 'solid green 2px'}}>ItemLinhhstContainer</div>
  )
} 
export default ItemListContainer