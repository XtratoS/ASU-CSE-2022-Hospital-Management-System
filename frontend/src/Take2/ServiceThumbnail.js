import {Link} from 'react-router-dom';

function ServiceThumbnail(props) {
    let service = props.service
    return (
        <div className="service text-center mt-2 mb-2 pt-2 pb-2">
            <div className="card m-auto" style={{width: '18rem'}}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{service.name}</h5>
                    <p className="card-text">{service.description}</p>
                    <Link className="btn btn-primary"
                        to={`/services/${service.id}`}
                    >
                        More
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ServiceThumbnail;