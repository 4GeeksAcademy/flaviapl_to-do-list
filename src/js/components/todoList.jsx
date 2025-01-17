import React, { useState } from "react";

const TodoList = ( ) => {
    const [input, setInput] = useState ("")
    const[tasks, setTasks] = useState ([])
    const [hovered, setHovered] = useState (null)
   
function addTask (e) {
    if (e.key === "Enter"){
    setTasks([...tasks, input]);
    setInput("");
    }
}

function removeTask(index) {
   setTasks (tasks.filter((item, i) =>
    i !== index))
}

function showX(index) {
    setHovered(index)
    console.log("hovered");
    
}

function hideX(){
    setHovered(null)
}



    return (
        <div className="container" style={{border: "solid black 1px", height:"800px", width:"800px", backgroundColor:"#f5f5f5", marginTop:"5px"}}>
            <h1 style={{textAlign:"center", fontSize:"80px", fontWeight:"lighter", marginTop:"20px"}}>todos</h1>
            <ul style={{listStyle:"none"}}>
                <li><input type="text" value={input} onChange={(e)=>setInput(e.target.value)} onKeyDown={addTask} className="form-control" id="input" style={{border: "solid grey 1px", height:"30px", marginTop:"0px",width:"600px", height:"45px", margin: "0 auto", borderRadius:"0px", backgroundColor:"#f5f5f5", paddingLeft:"60px", fontSize:"20px"}}/></li>
                {tasks.length === 0 ? (<li style={{border: "solid grey 1px", marginTop:"0px", width:"600px", height:"45px", margin: "0 auto", display:"flex", alignItems: "center", justifyContent:"space-between", paddingLeft: "60px", paddingRight:"10px", fontSize:"20px"}}>
                    No tasks, add a task
                </li>
            ) : (
                    tasks.map((item, index) => (<li style={{border: "solid grey 1px", marginTop:"0px", width:"600px", height:"45px", margin: "0 auto", display:"flex", alignItems: "center", justifyContent:"space-between", paddingLeft: "60px", paddingRight:"10px", fontSize:"20px"}} onMouseEnter={()=>showX(index)} onMouseLeave={()=>hideX(index)}>{item} {hovered === index && (<i className="fa-solid fa-x" style={{cursor: "pointer", color: "red", paddingRight:"10px"}}onClick={()=>removeTask(index)}></i>
                )}
                </li>)))}
                <p style={{border: "solid grey 1px", marginTop:"0px", width:"600px", height:"45px", margin: "0 auto", display:"flex", alignItems: "center", paddingLeft: "10px", fontSize:"12px", color:"gray"}}>{tasks.length} item left</p>
            </ul>
        </div>
    )
}



//PSEUDOCODIGO:
//CREAR INPUT ok
// quita label
//PONER "No hay tareas, añadir tareas" COMO PLACEHOLDER? Cuando no haya tareas pendientes 
//CREAR VARIABLE GLOBAL PARA LAS TAREAS
//METER LAS TAREAS DENTRO DE INPUT COMO VALUE?
//onchange
//LAS TAREAS SE AÑADE CON ENTER --> onKeyDown {funzione}
//CREAR ICONO DE ELIMINAR
//MOSTRAR EL ICONO SOLO CUANDO SE PASE EL RATÇON ENCIMA (HOVER)
//CREAR LA LISTA PARA LAS TAREAS 
//LIST.MAP ??


export default TodoList