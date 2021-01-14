function BookAppointmentModal(props) {
    return (
        <div className="modal fade" id="bookAptModal" tabIndex="-1" aria-labelledby="bookAptModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="bookAptModalLabel">Book a New Appointment</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="recipient-name" className="col-form-label">Department's Name:</label>
                            <input type="text" className="form-control" id="recipient-name" disabled value={(props.department && props.department.department_name || '')}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="recipient-name" className="col-form-label">Doctor's Name:</label>
                            <input type="text" className="form-control" id="recipient-name" disabled value={props.doctor.user && (`${props.doctor.user.first_name} ${props.doctor.user.last_name}`) || ''}/>
                        </div>
                        <div>
                        <select className="form-select" aria-label="Default select example" defaultValue="-">
                            <option value="-" disabled>Select appointment date</option>
                            <option value="1">15/1</option>
                            <option value="2">16/1</option>
                            <option value="3">17/1</option>
                        </select>
                        <select className="form-select" aria-label="Default select example" defaultValue="-">
                            <option value="-" disabled>Select appointment time</option>
                            <option value="1">15:00</option>
                            <option value="2">16:00</option>
                            <option value="3">17:00</option>
                        </select>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Book Appointment</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default BookAppointmentModal;