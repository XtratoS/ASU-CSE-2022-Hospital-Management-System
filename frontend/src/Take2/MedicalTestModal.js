function MedicalTestModal(props) {
    return (
        <div className="modal fade" id="testModal" tabIndex="-1" aria-labelledby="testModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="testModalLabel">New Test Request</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="recipient-name" className="col-form-label">Patient Name:</label>
                            <input type="text" className="form-control" id="recipient-name" disabled value="Mariam"/>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" style={{float: 'left'}} htmlFor="flexRadioDefault1">
                                Lab Test
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label className="form-check-label" style={{float: 'left'}} htmlFor="flexRadioDefault2">
                                Radiology Test
                            </label>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message-text" className="col-form-label">Test Description:</label>
                            <textarea className="form-control" id="message-text"></textarea>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Submit Test Request</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default MedicalTestModal;