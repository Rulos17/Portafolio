import { Component } from "react";

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
            <div  style={styles.main}>{this.props.children}</div>
        )
    }
}

export default MainDiv