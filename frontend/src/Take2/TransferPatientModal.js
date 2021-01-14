import {Component} from 'react';

function TransferPatientModal(props) {
    return (
        <div className="modal fade" id="transferModal" tabIndex="-1" aria-labelledby="transferModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="transferModalLabel">New Medical Record</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="recipient-name" className="col-form-label">Patient Name:</label>
                            <input type="text" className="form-control" id="recipient-name" disabled value={props.patient.name}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="recipient-name" className="col-form-label">Hospital Name:</label>
                            <input type="text" className="form-control" id="recipient-name"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message-text" className="col-form-label">Brief Description:</label>
                            <textarea className="form-control" id="message-text"></textarea>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Submit Recort</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default TransferPatientModal;