import { Component } from "react";

const styles ={
    button:{
        backgroundImage:'url(/imagenes/logoFacebook.png) ' ,
        width: '35px',
        height:'35px',
        backgroundSize:'100% 100%',
        backgroundColor:'#B64F56',
        border:'none',
        
        

    }
}

class ButtonRS extends Component{
    render(){
        return(
            
            <button style={styles.button}></button>
        )
    }
}

export default ButtonRS