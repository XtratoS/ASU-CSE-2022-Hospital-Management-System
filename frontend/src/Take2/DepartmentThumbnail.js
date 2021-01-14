import {Link} from 'react-router-dom';
import i1 from './optical_department.png'
import i2 from './cardiology_department.png'
import i3 from './obgyn_department.png'
import i4 from './dental_department.png'
const images = {
    1: i1,
    2: i2,
    3: i3,
    4: i4
}

function DepartmentThumbnail(props) {
    let department = props.department
    return (
        <div className="department text-center mt-2 mb-2 pt-2 pb-2">
            <div className="card m-auto" style={{width: '18rem'}}>
                <img src={images[department.id]} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{department.name}</h5>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <Link className="btn btn-primary"
                        to={`/departments/${department.id}`}
                    >
                        View Doctors
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DepartmentThumbnail;