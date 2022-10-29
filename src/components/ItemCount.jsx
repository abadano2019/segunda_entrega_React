import { useState,useEffect } from "react";


const Counter = ({stock, onAdd}) =>{
    const[contador, setContador] = useState(0);
    const[fecha, setFecha] = useState(null);
    const[mensaje, setMensaje] = useState(false);

    const handleAdd = () =>{
      setContador(contador + 1);
      const date = new Date().toLocaleString();
      setFecha(date);
    }

    const handleSubtract = () =>{
      setContador(contador - 1);
    }

    useEffect(()=>{
        if (contador >= 10) {setMensaje(true)}
    },[contador]
    )

    return(
        <div>
            <button onClick = {()=>handleAdd()}>Sumar</button>
            <span>cantidad de click: {contador}</span>
            <span>Fecha: {fecha}</span>
            {mensaje ? <span> Obten un descuento del 10%</span> : null}
            <button onClick = {()=>handleSubtract()}>Restar</button>
        </div>
    )

}

export default  Counter;