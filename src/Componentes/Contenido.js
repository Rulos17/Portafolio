import { Component } from "react";
import Home from "./Home";
import SobreMi from "./SobreMi";
import Conocimientos from "./Conocimientos";
import Proyectos from "./Proyectos";


const styles={
    div:{
        height:'500px',
        width:'1000px',
        alignItems:'center',
        boxShadow: '-10px -10px 20px rgb(97,41,42,0.8)',
        border:'solid 5px blue',
        display:'flex',
        justifyContent:'space-between',
        
    }
}

class Contenido extends Component{
    render(){
        const {homeVisible, sobremiVisible, conocimientosVisible, proyectosVisible} = this.props
        return(
            <div style={styles.div}>
                {homeVisible
                ?   <Home/>
                :   null 
                }
                {sobremiVisible
                ?   <SobreMi/>
                :   null 
                }
                {conocimientosVisible
                ?   <Conocimientos/>
                :   null 
                }
                {proyectosVisible
                ?   <Proyectos/>
                :   null 
                }
            </div>
            
            
        )
    }
}

export default Contenido