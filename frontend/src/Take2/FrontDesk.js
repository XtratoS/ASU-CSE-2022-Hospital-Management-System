import React, { Component } from 'react';
import AllocatePatientModal from './AllocatePatientModal';
import API from './API';

export class FrontDesk extends Component {
    state = {
        rooms: [],
        activeRoom: {}
    }

    componentDidMount() {
        API.getRooms(localStorage.getItem('key')).then((rooms)=>{this.setState({rooms: rooms})});
    }

    setActiveRoom(room) {
        this.setState({activeRoom: room});
    }

    render() {
        return (
            <div className="text-center">
                <div className="mt-4">
                    <h4>Available Rooms</h4>
                    <table className="table table-striped text-center">
                        <thead><tr>
                            <td>Room #</td>
                            <td>Available Space</td>
                            <td>Action</td>
                        </tr></thead>
                        <tbody>
                            {this.state.rooms.map(room=>{
                                return (
                                    <tr>
                                        <td>{room.id}</td>
                                        <td>{room.max_capacity - room.current_capacity}</td>
                                        <td>
                                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#allocateModal" onClick={()=>{this.setActiveRoom(room)}}>Allocate patient to this Room</button>
                                        </td>
                                    </tr>
                                )
                            })}
                            <tr>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <AllocatePatientModal
                    room={this.state.activeRoom}
                />
            </div>
        )
    }
}

export default FrontDesk;