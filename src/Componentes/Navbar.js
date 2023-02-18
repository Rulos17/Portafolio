import { Component } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import RedesSociales from "./RedesSociales";

const styles = {
    navbar:{
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        position: 'absolute',
        boxShadow: '6px 0px 6px rgb(97,41,42,0.8)',
        height: '100%',
        width: '250px',
        backgroundColor: '#B64F56',
        padding: '0px 0px', 
    },
    div:{
        padding: 0,
        marginTop:'80px',
        height:'470px',
        
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        
        
        
        
    },
    
}

class Navbar extends Component{
    render(){
        const {logo} = this.props
        return(
            <nav style={styles.navbar}>

                <Logo logo={logo} />

                <div style={styles.div}>
                    <NavItem>item 1</NavItem>
                    <NavItem>item 2</NavItem>
                    <NavItem>item 3</NavItem>
                    <NavItem>item 4</NavItem>
                    <NavItem>item 5</NavItem>
                    
                </div>
                <RedesSociales/>
            </nav>
        )
    }
}

export default Navbar