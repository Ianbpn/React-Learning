import { useState } from "react";
const TukiChild =()=>{
    //HOOKS primer Intento - "They let you use state and other React features without writing a class."
    //"React will preserve this state between re-renders."
    //Genero un Hook  llamado useState, lo cual me generara un componente estado en el cache
   
    const [count,setCount] = useState(0);
    //Returns a stateful value, and a function to update it.
    //During the initial render, the returned state (count) is the same as the value passed as the first argument (0).
    
    console.log("count",count);
    console.log("Turip");

    const increase = () => {
        console.log("Work in Progress");
        setCount(count+1);
    }
    const decrease =() =>{setCount(count-1)}

    const [info,setInfo] = useState({name:"iancito",age:24});

    //actualizar datos
    //es muy poco seguro este metodo ya que el facil olvidarse todo lo que compone el estado, usar para estados simples nada mas
    const updateInfo=()=>{setInfo({name:"Ian",age:24,lastName:"Noreiko"})} 

     /*No sirve , lo termina guardando como string
    const updateInfoV2=()=>{
        setInfo(info.name="Ian Pereyra");
    }*/
    console.log(info);

    //Loader

    const[loader,setLoader] = useState(false);
    const updateLoader=()=>{
        if(loader){setLoader(false)}
        else if (!loader){setLoader(true)}
    }
    console.log(loader)


    return(
        <div>
            <h1>TukiChild</h1>
            <h2>Hijo de TukiComponent y nieto de App</h2>
            <h4>No, no necesitas un extends como en java para tener hijos</h4>
            <h3>Contador: {count} enjoy!</h3>
            <button onClick={increase}>Subi!</button>
            <button onClick={decrease}>Baja!</button>
            <h3>Edad: {info.age} Nombre: {info.name} Apellido: {info.lastName}</h3>
            <button onClick={updateInfo}>Actualizar Info!</button>
            <h3>Loader: {String(loader)}</h3>
            <button onClick={updateLoader}>Change Loading!</button>
        </div>
    )
};
export default TukiChild;