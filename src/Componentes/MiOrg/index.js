import "./MiOrg.css"
//import { useState } from "react"

const MiOrg = (props) =>{
    console.log(props)
    //const [mostrar, actualizarMostrar] = useState (true)
    //const manejarClick =() =>{
      //  console.log ("mostrar/ocultar elemento", !mostrar)
        //actualizarMostrar(!mostrar)
   //}
    return <section className="orgSection">
        <h3 className= "title" >Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick ={props.cambiarMostrar}/>
    </section>
}

export default MiOrg

//Estado - hooks
//useState
//const [nombreVariable, funcionActualiza] = useState(valor inicial)