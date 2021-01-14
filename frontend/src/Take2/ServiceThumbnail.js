import {Link} from 'react-router-dom';
import i1 from './lab_service.png'
import i2 from './radiology_service.png'

const images = {
    1: i1,
    2: i2
}

function ServiceThumbnail(props) {
    let service = props.service
    return (
        <div className="service text-center mt-2 mb-2 pt-2 pb-2">
            <div className="card m-auto" style={{width: '18rem'}}>
                <img src={images[service.id]} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{service.name}</h5>
                    <p className="card-text">{service.description}</p>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bookServiceModal" onClick={()=>{props.setActiveService(props.service)}}>Book</button>
                </div>
            </div>
        </div>
    )
}

export default ServiceThumbnail;