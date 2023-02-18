import { Component } from "react";
import ButtonRS from "./ButtonRS";
const styles = {
    div:{
        width: '200px',
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        
        marginTop:'20px',
        height: '100px',
        justifyContent:'space-between'
    },
    button:{
        width:'50px',
    }
}


class RedesSociales extends Component{
    render(){
        return(
            <div style={styles.div}>
                <ButtonRS />
                <ButtonRS />
                <ButtonRS />
                <ButtonRS />
            </div>
        )
    }
}

export default RedesSociales