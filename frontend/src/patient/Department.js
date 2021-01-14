import react, {Component} from 'react';
//import {BrowserRouter,Route} from 'react-router-dom'
class Department extends Component {

    state = {
        department:'-'
    }

    render() {
        return (
            <form>
                <select value={this.state.department}>
                    <option value="-" disabled>Please Select</option>
                    <option value="a">Dep A</option>
                    <option value="b">Dep B</option>
                    <option value="c">Dep C</option>
                </select>
            </form>
        );
    }
}

export default Department;