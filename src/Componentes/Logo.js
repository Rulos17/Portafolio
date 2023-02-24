import { Component } from "react";


const styles ={
    logo:{
        marginTop:'30px',
        height:"auto",
        borderRadius:'30px',
        boxShadow: '8px 8px 8px rgb(97,41,42,0.6)',
        border:'solid 1px #61292A',
    },
}
class Logo extends Component{
    
    render(){
        const {logo} = this.props
        return(
            <img alt ="logo"style={styles.logo} src={logo.img} width={logo.width} ></img>
        )
    }
}
export default Logo