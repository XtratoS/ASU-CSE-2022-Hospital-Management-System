import React , {Component} from 'react';
class Viewservices extends Component {
    
    render(){
      const {services} = this.props;
      const theservices = services.map( (service) => {
          return (
            <div>
                <p>{service.name}</p>
            </div>
          )
      } )
        return (
            <div>
                {theservices}
            </div>

    
        );}

}
export default Viewservices;