import React , {Component} from 'react';

class Bookappointment extends Component{
    constructor() {
        super(...arguments);
        //define the array 
        this.data = [
            { text: 'X-ray', id: '1' },
            { text: 'Radiology test', id: '2' },
            { text: 'Lab test', id: '3' },
        ];
    }
    render(){
        return(
            <div>
            <button>Click to Submit</button>
            <ListViewComponent id='list' dataSource={this.data} showCheckBox={true} headerTitle='Pick An Appointment' showHeader={true}></ListViewComponent>
            </div>
            );            
    }
}
export default Bookappointment;