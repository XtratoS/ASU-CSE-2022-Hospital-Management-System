import React , {Component} from 'react';
import './medical.css'
class Medicalrecord extends Component{

   state = {
      patientName: '',
      patientage: '',
      email:'',
      doctorName: '',
      history:''
    }
    change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };
    onSubmit = (e) => {
      e.preventDefault();
      this.setState({
         PatientName: '',
         Patientage: '',
         email:'',
         doctorName: '',
         history:''
         
      });
    };
    render(){
       return(
         <form>
           
            <div className="medicalform">
               <div className="inputform">
                      <label>Patient Name:</label>
                        <input type="text"
                        name="patientName"
                        placeholder="patientName"
                        value={this.state.patientName}
                        onChange={e => this.change(e)}
                        />
                        <br></br>
                       <label>Patient age : </label>
                        <input
                        type="number"
                        name="patientage"
                        placeholder="patientage"
                        value={this.state.patientage}
                        onChange={e => this.change(e)}
                        />
                        <br></br>
                        <label>Patient Email :</label>
                         <input
                           type="text"
                           name="email"
                           placeholder="Email"
                           value={this.state.email}
                           onChange={e => this.change(e)}
                        />
                        <br></br>
                        <label>DoctorName:</label>
                         <input
                         type="text"
                           name="doctorName"
                           placeholder="the doctor follows up with"
                           value={this.state.doctorName}
                           onChange={e => this.change(e)}
                        />
                         <br></br>
                        <label>Patient history:</label>
                         <input
                         type="text"
                           name="history "
                           placeholder="Patient's medical history"
                           value={this.state.history}
                           onChange={e => this.change(e)}
                        />
                     <br />
                  </div>
                  <label>Notes: </label>
                     <textarea name="medical record for patient" rows="3" cols="50">

                     </textarea>
               
               <button  /*onClick={e => this.onSubmit(e)}*/ >Submit</button>
            </div>
            
         </form>
       )
    }

}
export default Medicalrecord; 