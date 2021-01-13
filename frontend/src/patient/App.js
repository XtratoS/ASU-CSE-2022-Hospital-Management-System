import React,{Component} from 'react';
import './playout.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Viewservices from './viewservices.js';

class App extends Component{
  state ={
    services : [
      { name:'a'},
      { name:'b'},
      {name:'c'}
    ]
  }
  render(){
    return(
      <div>
        <Header />
        <Viewservices services={this.state.services} />
        <Footer />
      </div>
    );
  }
}


export default App;
