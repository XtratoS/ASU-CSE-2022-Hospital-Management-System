function PatientRowInDoctorView(props) {
    return(
        <tr>
            <td>{props.patient.id}</td>
            <td>{props.patient.name}</td>
            <td><button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{props.setActivePatient(props.patient)}}>+ Record</button></td>
            <td><button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#testModal" onClick={()=>{props.setActivePatient(props.patient)}}>+ Test</button></td>
            <td><button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#transferModal" onClick={()=>{props.setActivePatient(props.patient)}}>Transfer</button></td>
        </tr>
    )
}

export default PatientRowInDoctorView;