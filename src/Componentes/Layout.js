import { Component } from "react";

const styles = {
    
    layout:{
            
        height: '700px',
        width: '100%',
        
        // border:'5px solid red',
        
        position:'relative',
        display:'flex',
        justifyContent:'center',
        marginLeft:'250px'
        
        
        
        
    },
    container:{
        
        width:'100%',
        height:'100%',
        display: 'flex',
        // border:'5px solid yellow',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        
        
        
        
        
    }
}

class Layout extends Component{
    render(){
        return(
            <div style={styles.layout}>
                <div style={styles.container}> 
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout