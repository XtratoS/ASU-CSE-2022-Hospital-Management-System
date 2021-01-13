import react, {Component} from 'react';
//import {BrowserRouter,Route} from 'react-router-dom'
class Department extends Component {

    state = {
        department:''
    }

    render() {
        return (
            <form>
                <select value={"this.state.department"}>
                    <option value="a"></option>
                    <option value="b"></option>
                    <option value="c"></option>
                </select>
            </form>
        );
    }
}

export default Department;