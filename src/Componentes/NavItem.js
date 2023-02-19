import { Component } from "react";

const styles={
    
    
    button:{
        width:'200px',
        height:'100%',
        margin: 0,
        maxHeight:'75px',
        padding:'30px 0px',
        boxShadow: '0px 4px 4px rgb(97,41,42,0.6)',
        border:'solid 1px #61292A',
        borderRadius : '20px',
        color:'#61292A',
        backgroundColor: '#B64F56',
        cursor:'pointer',
        fontSize:'1.2rem',
        
        
    }
}

class NavItem extends Component{
    render(){
        
        return(
            <button style={styles.button} {... this.props}/>
        )
    }
}
export default NavItem