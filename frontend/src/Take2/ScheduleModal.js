function ScheduleModal(props) {
    return (
        <div className="modal fade" id="scheduleModal" tabIndex="-1" aria-labelledby="scheduleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="scheduleModalLabel">Doctor Schedule</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                        <div className="mb-3">
                            {props.start_time || ''} : {props.end_time || ''}
                        </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ScheduleModal;