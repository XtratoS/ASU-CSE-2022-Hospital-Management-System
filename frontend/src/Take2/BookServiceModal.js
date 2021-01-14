function BookServiceModal(props) {
    return (
        <div className="modal fade" id="bookServiceModal" tabIndex="-1" aria-labelledby="bookServiceModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="bookServiceModalLabel">New Service Booking</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="service-name" className="col-form-label">Service:</label>
                            <input type="text" className="form-control" id="service-name" disabled value={props.service.name}/>
                        </div>
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
                        <div className="mb-3">
                            <label htmlFor="message-text" className="col-form-label">Test Description:</label>
                            <textarea className="form-control" id="message-text"></textarea>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Submit Test Appointment</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default BookServiceModal;