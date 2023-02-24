import { Component } from "react";

const styles = {
    layout:{
        width:'100%',
        
        marginLeft:'250px', 
        color:'#add763',
        display: 'flex',
        flexDirection: 'column',
        
        
    },
    
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