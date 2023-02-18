
import './App.css';
import { Component } from 'react';
import Navbar from './Componentes/Navbar'

class App extends Component{
  state={
    logo: { nombre: 'Logo', ancho: '200px', img: '/imagenes/Logo.jpeg' }
  }
  
  render(){
    return(
      <div>
        <Navbar logo = {this.state.logo}/>
      <div>
      </div>
      
      </div>
    )
  }
  
}

export default App;
