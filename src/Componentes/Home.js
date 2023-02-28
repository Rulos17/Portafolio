import { Component } from "react";
// import Title from "./Title";

const styles = {
    div:{
        margin:0,
        padding:0,
        display:'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        background:'#9C9C9C',
        boxShadow: '10px 10px 20px rgb(97,41,42,0.8)',
        width:'1000px',
        height:'500px',
        
    },
    home:{
        width:'100%',
        height:'100%',
        display:'flex',
        flexWrap:'wrap',
        flexDirection: 'column',
        justifyContent:'center',
        border:'5px solid green',
        alignItems:'center',
    }
    
}

class Home extends Component{
    render(){

        return(
            <div style={styles.div}> 
                <div style={styles.home}>
                    <h2>Home</h2>
                    <p>ajkhgSSSSSSSSSSSSS</p>
                </div>
                
                <img  alt="" src="/imagenes/Logo.jpeg" width="500px" />
            </div>
            
            
        )
    }
}
 export default Home