import React , {Component} from 'react'

class Feedback extends Component {
    state={
        Feedback:''
    }

    handleChange=(e)=>{
        console.log(e.target.value)
    }

    render(){
        return(
            <form>
                <p>Please enter your Feedback:</p>
                <input type="text" onChange={this.handleChange}/>
            </form>
        
        );
    }
}

export default Feedback;