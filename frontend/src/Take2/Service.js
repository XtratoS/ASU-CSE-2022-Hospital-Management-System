// import {Route, Link} from 'react-router-dom';

function Service(props) {
    let service = props.service
    return (
        <div className="text-center mt-2 mb-2 pt-2 pb-2">
            Hello from Service {`${service.id}: ${service.name}`}
        </div>
    )
}

export default Service;