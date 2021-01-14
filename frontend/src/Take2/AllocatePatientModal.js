function AllocatePatientModal(props) {
    return (
        <div className="modal fade" id="allocateModal" tabIndex="-1" aria-labelledby="allocateModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="allocateModalLabel">New Service Booking</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="room-number" className="col-form-label">Room #:</label>
                            <input type="text" className="form-control" id="room-number" disabled value={props.room.id}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="patient-id" className="col-form-label">Patient ID</label>
                            <input type="text" className="form-control" id="patient-id"/>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Allocate</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AllocatePatientModal;