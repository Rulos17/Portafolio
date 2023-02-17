import { Component } from "react";

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
    ul:{
        padding: 0,
        marginTop:'50px',
        borderTop:'solid 1px #61292A',
        boxShadow: '0px -4px 4px rgb(97,41,42,0.6)',
        
    },
    logo:{
        height:"auto",
        borderRadius:'30px',
        boxShadow: '8px 8px 8px rgb(97,41,42,0.6)',
        border:'solid 1px #61292A',
    },
    li:{
        width:'250px',
        margin: 0,
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding:'30px 0px',
        boxShadow: '0px 4px 4px rgb(97,41,42,0.6)',
        borderBottom:'solid 1px #61292A',
        color:'#61292A',
        
    }
}

class Navbar extends Component{
    render(){
        return(
            <nav style={styles.navbar}>

                <img style={styles.logo} src="/imagenes/Logo.jpeg" width="200px"></img>

                <div >
                    <ul style={styles.ul}>
                        <li style={styles.li}>item1</li>
                        <li style={styles.li}>item2</li>
                        <li style={styles.li}>item3</li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar