import React, {Component} from 'react';
import API from '../Take2/API';

class Addinfo extends Component {

    state = {
        name: '',
        age: null,
        previouse : '',
        graduationyear: null,
        loaded: false
    }

    componentDidMount() {
        API.getProfessionalInformation(this.props.id).then((response)=>{
            this.setState(response.information);
        });
    }

    myChangeHandler = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    onSubmitForm= (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return(
            <form className="professional-information-form row g-3">
                <div className="col-12">Fill your information here:</div>
                <div className="col-12">
                    <input className="form-control" type="text" placeholder="Name" value={this.state.name} onChange={this.myChangeHandler} />
                </div>
                <div>
                    <input className="form-control" type="text" placeholder="Age" value={this.state.age} onChange={this.myChangeHandler} />
                </div>
                <div>
                    <input className="form-control" type="text" placeholder="Previous Exp" value={this.state.previous} onChange={this.myChangeHandler} />
                </div>
                <div>
                    <input className="form-control" type="text" placeholder="Graduation Year" value={this.state.graduationyear} onChange={this.myChangeHandler} />
                </div>
                <div className="">
                    <button className="btn btn-primary" onClick={this.onSubmitForm}>Submit</button>
                </div>
            </form>
        );
    }
}
export default Addinfo;