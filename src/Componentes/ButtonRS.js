import { Component } from "react";

const styles ={
    button:{
        backgroundImage:'url(/imagenes/logoFacebook.png) ' ,
        width: '35px',
        height:'35px',
        backgroundSize:'100% 100%',
        backgroundColor:'#B64F56',
        border:'none',
        cursor:'pointer',
        margin:0,
        padding:0,
        justify:'end',
        
        boxShadow: '4px 4px 4px rgb(97,41,42,0.6)',
        borderRadius:'6px',
        
        
        

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