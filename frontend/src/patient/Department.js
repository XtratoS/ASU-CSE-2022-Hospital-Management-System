import react from 'react';
//import {BrowserRouter,Route} from 'react-router-dom'
class Department extends Component{
    constructor(props){
        super(props);
            this.state ={
                department:''
            };
    }
}
render()
{
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
export default Department;