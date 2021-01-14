import {Component} from 'react';
import {Route} from 'react-router-dom';
import API from './API'
import DepartmentThumbnail from './DepartmentThumbnail';
import Department from './Department';


class Departments extends Component {
    state = {
        departments: [],
        loaded: false
    }
    
    componentDidMount = () => {
        this._isMounted = true;
        API.getDepartments().then((departments) => {
            if (this._isMounted) {
                this.setState({loaded: true, departments: departments});
            }
        });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <Route path="/departments">
                <div className="container-sm mt-4">
                    {this.state.loaded || (
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )}
                    <Route exact path="/departments">
                        <div className="row">
                            {this.state.departments.map((department) => (
                                <div key={department.id} className="col">
                                    <DepartmentThumbnail
                                        department={department}
                                    />
                                </div>
                            ))}
                        </div>
                    </Route>
                    {this.state.departments.map((department) => (
                        <Route key={department.id} exact path={`/departments/${department.department_name}`}>
                            <div>
                                <Department
                                    department={department}
                                />
                            </div>
                        </Route>
                    ))}
                </div>
            </Route>
        )
    }
}

export default Departments;