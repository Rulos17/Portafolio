import { Component } from "react"

const styles = {
    title: {
        
        fontSize:'4rem',
        color:'#61292A',
        padding:'20px',
        
        border:'dashed 3px #61292A',
        
    },
    div:{
        display: 'flex',
        alignItems:'center',
        flexDirection: 'column',
        
    }
}

class Title extends Component {
    render(){
        return(
            <div style={styles.div}>
                <h1 style={styles.title}>{this.props.children}</h1>
            </div>
            
        )
    }
}

export default Title