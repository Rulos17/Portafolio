import { Component } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import RedesSociales from "./RedesSociales";

const styles = {
    navbar:{
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        position:'absolute',
        boxShadow: '6px 0px 6px rgb(97,41,42,0.8)',
        height: '100%',
        width: '250px',
        backgroundColor: '#B64F56',
        padding: '0px 0px', 
        
        
    },
    navitems:{
        padding: 0,
        marginTop:'80px',
        maxHeight:'400px',
        
        
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        
        
        
        
        
    },
    end:{
       
        justify:'end',
        
        margin:0,
    },
    div:{
        display:'flex',
        height:'100%',
        
    }
}

class Navbar extends Component{
    render(){
        const {logo} = this.props
        return(
            <nav style={styles.navbar}>

                <Logo logo={logo} />
                <div style={styles.div}>
                    <div style={styles.navitems}>
                        <NavItem>Home</NavItem>
                        <NavItem>Sobre mi</NavItem>
                        <NavItem>Conocimientos</NavItem>
                        <NavItem>Proyectos</NavItem>
                            
                    </div>
                       
                </div>
                <div style={styles.end}>                    
                    <RedesSociales/>
                </div> 

            </nav>
            
        )
    }
}

export default Navbar