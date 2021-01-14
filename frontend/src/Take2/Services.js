import {Component} from 'react';
import {Route} from 'react-router-dom';
import API from './API'
import BookServiceModal from './BookServiceModal';
// import Service from './Service';
import ServiceThumbnail from './ServiceThumbnail';

class Services extends Component {
    state = {
        services: [],
        activeService: {},
        loaded: false
    }

    componentDidMount = () => {
        this._isMounted = true;
        API.getServices().then((response) => {
            if (this._isMounted) {
                this.setState({loaded: true, services: response});
            }
        });
    }

    componentWillUnmount = () => {
        this._isMounted = false;
    }

    setActiveService = (service) => {
        this.setState({activeService: service})
    }

    render() {
        return(
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
                                    setActiveService={this.setActiveService}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <BookServiceModal
                    service={this.state.activeService}
                />
            </Route>
        )
    }
}

export default Services;