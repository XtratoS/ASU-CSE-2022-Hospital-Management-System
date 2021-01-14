import { render } from 'react';
import React ,{component } from 'react'
import {BrowserRouter , Route} from 'react-router-dom';

class Transferpatient extends component{
    state = {
        rooms:{}
    };

    change = () => {
        this.setState({
            rooms:{}-1
        })
    }
    render() {
        return (
            <div className="transferbox">
                <button className="b1">Check Availability of rooms</button>
                <p>{this.state.rooms}</p>
                <p className="patiententer">Enter the name of patient of want to Transfer</p>
                <label className="patiententer" for="patient name">Patient name</label>
                <input type="text" placeholder="Enter here"></input>
                <button className="b1" onClick={this.change}>Transfer Patient </button>
            </div>
        );
    }
}

export default Transferpatient;
