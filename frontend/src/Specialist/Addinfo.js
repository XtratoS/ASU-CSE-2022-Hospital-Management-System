import React , { Component } from react;

class addinfo extends Component {

    constructor(props){
        super(props);
        this.state ={
            Name:'',
            age: null,
            previouse :'',
            graduationyear:null,
        };
    }
        myChangeHandler = (event) =>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    onSubmitForm= (event) => {
        console.log(this.state)
      }
    render()
    {
        return(
            <div>
                <form>
                    <h1>Fill your information here:</h1>
                   <div>
                    <label>Enter your name:</label>
                    <input type="text" value={this.state.name} onChange={this.myChangeHandler} />
                    </div>
                    <div>
                    <label>Enter your age:</label>
                    <input type='text' value={this.state.age} onChange={this.myChangeHandler} />
                    </div>
                    <div>
                    <label>Mention your previous experience:</label>
                    <input type='text' value={this.state.previouse} onChange={this.myChangeHandler} />
                    </div>
                    <div>
                    <label>Enter your Graduation year:</label>
                    <input type='text' value={this.state.graduationyear} onChange={this.myChangeHandler} />
                    </div>
                    <br /> <br />
                    <div>
                         <button onClick={this.onSubmitForm}>Submit</button>
                    </div>
                    </form>
            </div>
        );
    }
}
export default addinfo;