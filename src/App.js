
import './App.css';
import { Component } from 'react';
import Navbar from './Componentes/Navbar'
import Layout from './Componentes/Layout';
import Title from './Componentes/Title';
import MainDiv from './Componentes/MainDiv';

class App extends Component{
  state={
    logo: { nombre: 'Logo', ancho: '200px', img: '/imagenes/Logo.jpeg' }
  }
  
  render(){
    return(
      <MainDiv className="app">
        <Navbar logo={this.state.logo} />
        <Layout>
          <Title>Titulo 1</Title>
          <div >
            
          </div>
          
          <p>holña</p>
        </Layout>
      </MainDiv>
    )
  }
  
}

export default App;
