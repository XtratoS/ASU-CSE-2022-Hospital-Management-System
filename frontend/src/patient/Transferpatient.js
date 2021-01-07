import { render } from '@testing-library/react';
import React ,{component } from 'react'
import {BrowserRouter , Route} from 'react-router-dom';

class Transferpatient extends component{
    state = {
        rooms:{}
    };
        change = () => 
         {
            this.setState({
             rooms:{}-1
             })
        }
    }
    render()
    {
        return(
            <div class="transferbox">
                <button class="b1">Check Availability of rooms</button>
                <p>{this.state.rooms}</p>
                <p class="patiententer">Enter the name of patient of want to Transfer</p>
                <label class="patiententer" for="patient name">Patient name</label>
                <input type="text" placeholder="Enter here"></input>
                <button class="b1" onClick={this.change}>Transfer Patient </button>
            </div>
        );
    }


}
export default Transferpatient;
