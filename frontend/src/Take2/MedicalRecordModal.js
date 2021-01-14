function MedicalRecordModal(props) {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">New Medical Record</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="recipient-name" className="col-form-label">Patient Name:</label>
                            <input type="text" className="form-control" id="recipient-name" disabled value={(props.patient.name || '')}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message-text" className="col-form-label">Record:</label>
                            <textarea className="form-control" id="message-text"></textarea>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Submit Record</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default MedicalRecordModal;