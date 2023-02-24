
import './App.css';
import { Component } from 'react';
import Navbar from './Componentes/Navbar'
import Layout from './Componentes/Layout';
import Title from './Componentes/Title';
import MainDiv from './Componentes/MainDiv';
import Contenido from './Componentes/Contenido';
class App extends Component{
state={
    logo: { width: '200px', img: '/imagenes/Logo.jpeg' },

    homeVisible: true,
    sobremiVisible: false,
    conocimientosVisible: false,
    proyectosVisible: false,
    
}
mostrarContent = ( contentVisible) =>{
    this.setState({homeVisible:false})
    this.setState({sobremiVisible:false})
    this.setState({conocimientosVisible:false})
    this.setState({proyectosVisible:false})
    if(contentVisible==="home"){
        this.setState({homeVisible:true})
    }
    if(contentVisible==="sobremi"){
        this.setState({sobremiVisible:true})
    }
    if(contentVisible==="conocimientos"){
        this.setState({conocimientosVisible:true})
    }
    if(contentVisible==="proyectos"){
        this.setState({proyectosVisible:true})
    }
}
render(){
    const {logo, homeVisible, sobremiVisible, conocimientosVisible, proyectosVisible} = this.state
    
    return(
        <MainDiv className="app">
        <Navbar logo={logo}  mostrarContent={this.mostrarContent}/>
        <Layout>
            <div >
            <Title>Titulo 1</Title>
            <Contenido homeVisible={homeVisible} sobremiVisible={sobremiVisible} conocimientosVisible={conocimientosVisible} proyectosVisible={proyectosVisible} ></Contenido>  
            </div>
        </Layout>
        </MainDiv>
    )
    }
}

export default App;
