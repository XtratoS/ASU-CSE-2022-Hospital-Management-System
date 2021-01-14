import react , {Component } from 'react'
import viewservices from './viewservices.js'

class Patient extends Component{
    render(){
        return(
            <div>
                
                <p>To Check different services, Click on the button :</p>
                <button onClick={view} value="View Services">View Services</button>
                <viewservices services="Hospital services" />
            </div>
        );
    }
}