function FeedbackModal(props) {
    return (
        <div className="modal fade" id="feedbackModal" tabIndex="-1" aria-labelledby="feedbackModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="feedbackModalLabel">Book a New Appointment</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="feedback-text" className="col-form-label">Feedback:</label>
                            <textarea className="form-control" id="feedback-text"></textarea>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Submit Feedback</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default FeedbackModal;