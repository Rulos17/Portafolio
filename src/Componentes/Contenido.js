import { Component } from "react";


class Contenido extends Component{
    render(){
        const {homeVisible, sobremiVisible, conocimientosVisible, proyectosVisible} = this.props
        return(
            <div>
                {homeVisible
                ?   <h1>home</h1>
                :   null 
                }
                {sobremiVisible
                ?   <h1>Sobre mi</h1>
                :   null 
                }
                {conocimientosVisible
                ?   <h1>Conocimientos</h1>
                :   null 
                }
                {proyectosVisible
                ?   <h1>Proyectos</h1>
                :   null 
                }
            </div>
            
            
        )
    }
}

export default Contenido