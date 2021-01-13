import React, {Component} from "react"
//import {BrowserRouter , Route} from 'react-router-dom';
class Doctorf extends Component{
    state = {
        name:''
    }
    
    handleChange=(e)=>{
        console.log(e.target.value)
    }
    
    render(){
        return(
           <div className="App">
              Follow up Form:
            <form>
                <input type="text" onChange={this.handleChange}/>
                <button>Submit</button>
            </form>
            {this.state.name}
            </div>
        );
    }
}
export default Doctorf;