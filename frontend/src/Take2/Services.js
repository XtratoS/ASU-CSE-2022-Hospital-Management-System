import {Component} from 'react';
import {Route} from 'react-router-dom';
import API from './API'
import Service from './Service';
import ServiceThumbnail from './ServiceThumbnail';

class Services extends Component {
    state = {
        services: [],
        loaded: false
    }

    componentDidMount = () => {
        API.getServices().then((response) => {
            this.setState({loaded: true, services: response});
        });
    }

    render() {
        return(
            <Route path="/services">
                <Route exact path="/services">
                    <div className="container-sm mt-4">
                        <div className="row">
                            {this.state.loaded || (
                                <div className="d-flex justify-content-center">
                                    <div className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            )}
                            {this.state.services.map((service) => (
                                <div key={service.id} className="col">
                                    <ServiceThumbnail
                                        service={service}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </Route>
                <div className="container-sm">
                    {this.state.services.map((service) => (
                        <Route key={service.id} exact path={`/services/${service.id}`}>
                            <div>
                                <Service
                                    service={service}
                                />
                            </div>
                        </Route>
                    ))}
                </div>
            </Route>
        )
    }
}

export default Services;