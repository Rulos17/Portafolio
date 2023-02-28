import { Component } from "react";
import '../App.css';
const styles = {
    main:{
        display: 'flex',
        
        color:'#add763',
        flexDirection: 'row',
        width:'100%',
        
        
        
        
    },
}

class MainDiv extends Component{
    render(){
        return(
            <div className ='app' style={styles.main}>{this.props.children}</div>
        )
    }
}

export default MainDiv