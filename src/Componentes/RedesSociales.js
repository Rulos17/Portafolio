import { Component } from "react";
import ButtonRS from "./ButtonRS";
const styles = {
    div:{
        width: '200px',
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        marginBottom:'10px',
        padding:0,
        
        height: 'auto',
        justifyContent:'space-between'
    },
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